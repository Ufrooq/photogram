#!/usr/bin/env python3
import unittest
import time
import sys
import os

# Import Selenium components
try:
    from selenium import webdriver
    from selenium.webdriver.common.by import By
    from selenium.webdriver.support.ui import WebDriverWait
    from selenium.webdriver.support import expected_conditions as EC
    from selenium.webdriver.chrome.options import Options
    from selenium.webdriver.chrome.service import Service
    from selenium.webdriver.common.keys import Keys
    from selenium.common.exceptions import TimeoutException, NoSuchElementException
    from webdriver_manager.chrome import ChromeDriverManager
except ImportError as e:
    print(f"Installing required packages: {e}")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "selenium", "webdriver-manager"])
    from selenium import webdriver
    from selenium.webdriver.common.by import By
    from selenium.webdriver.support.ui import WebDriverWait
    from selenium.webdriver.support import expected_conditions as EC
    from selenium.webdriver.chrome.options import Options
    from selenium.webdriver.chrome.service import Service
    from selenium.webdriver.common.keys import Keys
    from selenium.common.exceptions import TimeoutException, NoSuchElementException
    from webdriver_manager.chrome import ChromeDriverManager

class PhotogramSeleniumTests(unittest.TestCase):
    """
    Selenium Test Suite for Photogram Social Media Application
    Author: Ufrooq
    Date: 2025-06-17 22:27:02
    """
    
    @classmethod
    def setUpClass(cls):
        print("\n" + "="*70)
        print("🚀 SELENIUM WEBDRIVER TEST SUITE - PHOTOGRAM")
        print("="*70)
        print("Test Date: 2025-06-17 22:27:02")
        print("Author: Ufrooq")
        print("Framework: Selenium WebDriver")
        print("-"*70)
        
        chrome_options = Options()
        chrome_options.add_argument("--headless")
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument("--disable-dev-shm-usage")
        chrome_options.add_argument("--window-size=1920,1080")
        
        try:
            service = Service(ChromeDriverManager().install())
            cls.driver = webdriver.Chrome(service=service, options=chrome_options)
            cls.driver.implicitly_wait(10)
            cls.wait = WebDriverWait(cls.driver, 15)
            print("✅ Selenium WebDriver initialized successfully")
            
        except Exception as e:
            print(f"❌ WebDriver initialization failed: {e}")
            raise
        
        # Test configuration
        cls.BASE_URL = "http://localhost:3000"  # Update with your deployment URL
        cls.TEST_EMAIL = "test@example.com"
        cls.TEST_PASSWORD = "testpassword123"
        
        cls.total_tests = 10
        cls.current_test = 0
        cls.passed_tests = 0
        cls.failed_tests = 0

    def setUp(self):
        self.__class__.current_test += 1
        test_name = self._testMethodName.replace('test_', '').replace('_', ' ').title()
        print(f"\n[TEST {self.current_test}/{self.total_tests}] {test_name}")
        print("-" * 50)
        
        try:
            self.driver.get(self.BASE_URL)
            time.sleep(2)
        except Exception as e:
            print(f"❌ Failed to load page: {e}")

    def tearDown(self):
        if hasattr(self, '_outcome'):
            if hasattr(self._outcome, 'errors') and self._outcome.errors:
                self.take_screenshot(f"failed_test_{self.current_test}")

    def take_screenshot(self, filename):
        try:
            timestamp = int(time.time())
            screenshot_path = f"/tmp/photogram_{filename}_{timestamp}.png"
            self.driver.save_screenshot(screenshot_path)
            print(f"📸 Screenshot saved: {screenshot_path}")
        except Exception as e:
            print(f"⚠️ Screenshot failed: {e}")

    def test_01_signup_form_validation(self):
        """Test signup form validation"""
        try:
            self.driver.get(f"{self.BASE_URL}/signup")
            
            # Test empty form submission
            submit_button = self.wait.until(
                EC.element_to_be_clickable((By.CSS_SELECTOR, 'button[type="submit"]'))
            )
            submit_button.click()
            
            # Check for error toast
            error_toast = self.wait.until(
                EC.presence_of_element_located((By.CLASS_NAME, "sonner-toast-error"))
            )
            self.assertTrue("Please fill all the required fileds" in error_toast.text)
            
            # Test password mismatch
            self.driver.find_element(By.ID, "email").send_keys("test@example.com")
            self.driver.find_element(By.ID, "password").send_keys("password123")
            self.driver.find_element(By.ID, "confirmPassword").send_keys("password456")
            submit_button.click()
            
            error_toast = self.wait.until(
                EC.presence_of_element_located((By.CLASS_NAME, "sonner-toast-error"))
            )
            self.assertTrue("password and current password doesn't match" in error_toast.text)
            
            self.passed_tests += 1
            
        except Exception as e:
            self.failed_tests += 1
            raise

    def test_02_google_signin(self):
        """Test Google Sign In functionality"""
        try:
            self.driver.get(f"{self.BASE_URL}/login")
            
            # Click Google sign in button
            google_button = self.wait.until(
                EC.element_to_be_clickable((By.CSS_SELECTOR, 'button[variant="custom"]'))
            )
            self.assertTrue(google_button.is_displayed())
            google_button.click()
            
            # Verify Google auth window opens
            time.sleep(2)
            handles = self.driver.window_handles
            self.assertEqual(len(handles), 2, "Google auth window should open")
            
            self.passed_tests += 1
            
        except Exception as e:
            self.failed_tests += 1
            raise

    def test_03_create_post(self):
        """Test post creation functionality"""
        try:
            # Login first
            self.login_user()
            
            # Navigate to create post
            self.driver.get(f"{self.BASE_URL}/create-post")
            
            # Upload image
            file_input = self.driver.find_element(By.CSS_SELECTOR, 'input[type="file"]')
            file_input.send_keys("/path/to/test/image.jpg")
            
            # Add caption
            caption_input = self.driver.find_element(By.ID, "caption")
            caption_input.send_keys("Test post ✌️")
            
            # Submit post
            submit_button = self.driver.find_element(By.CSS_SELECTOR, 'button[type="submit"]')
            submit_button.click()
            
            # Verify success
            success_toast = self.wait.until(
                EC.presence_of_element_located((By.CLASS_NAME, "sonner-toast-success"))
            )
            self.assertTrue(success_toast.is_displayed())
            
            self.passed_tests += 1
            
        except Exception as e:
            self.failed_tests += 1
            raise

    def test_04_like_post(self):
        """Test post like functionality"""
        try:
            # Login first
            self.login_user()
            
            # Find first post heart icon
            heart_icon = self.wait.until(
                EC.element_to_be_clickable((By.CSS_SELECTOR, '.fa-heart'))
            )
            heart_icon.click()
            
            # Verify heart becomes solid
            solid_heart = self.wait.until(
                EC.presence_of_element_located((By.CSS_SELECTOR, '.fa-solid.fa-heart'))
            )
            self.assertTrue(solid_heart.is_displayed())
            
            self.passed_tests += 1
            
        except Exception as e:
            self.failed_tests += 1
            raise

    def test_05_post_comment(self):
        """Test post commenting functionality"""
        try:
            # Login first
            self.login_user()
            
            # Open comment dialog
            comment_button = self.wait.until(
                EC.element_to_be_clickable((By.CSS_SELECTOR, '.fa-comment'))
            )
            comment_button.click()
            
            # Add comment
            comment_input = self.wait.until(
                EC.presence_of_element_located((By.CSS_SELECTOR, '.comment-input'))
            )
            comment_input.send_keys("Test comment")
            
            # Submit comment
            submit_button = self.driver.find_element(By.CSS_SELECTOR, '.submit-comment')
            submit_button.click()
            
            self.passed_tests += 1
            
        except Exception as e:
            self.failed_tests += 1
            raise

    def test_06_profile_update(self):
        """Test profile update functionality"""
        try:
            # Login first
            self.login_user()
            
            # Navigate to profile update
            self.driver.get(f"{self.BASE_URL}/profile/update-profile")
            
            # Update bio
            bio_input = self.wait.until(
                EC.presence_of_element_located((By.ID, "userBio"))
            )
            bio_input.clear()
            bio_input.send_keys("Updated test bio")
            
            # Update social links
            self.driver.find_element(By.ID, "faceBookLink").send_keys("https://facebook.com/test")
            self.driver.find_element(By.ID, "twitterLink").send_keys("https://twitter.com/test")
            
            # Save changes
            submit_button = self.driver.find_element(By.CSS_SELECTOR, 'button[variant="custom"]')
            submit_button.click()
            
            self.passed_tests += 1
            
        except Exception as e:
            self.failed_tests += 1
            raise

    def test_07_auth_redirect(self):
        """Test authentication redirects"""
        try:
            # Try accessing protected route while logged out
            self.driver.get(f"{self.BASE_URL}/home")
            
            # Should redirect to login
            time.sleep(2)
            current_url = self.driver.current_url
            self.assertTrue("/login" in current_url)
            
            self.passed_tests += 1
            
        except Exception as e:
            self.failed_tests += 1
            raise

    def test_08_logout(self):
        """Test logout functionality"""
        try:
            # Login first
            self.login_user()
            
            # Click account menu
            menu_button = self.wait.until(
                EC.element_to_be_clickable((By.CSS_SELECTOR, 'button.cursor-pointer'))
            )
            menu_button.click()
            
            # Click logout
            logout_button = self.wait.until(
                EC.element_to_be_clickable((By.CSS_SELECTOR, 'Button.w-full'))
            )
            logout_button.click()
            
            # Verify redirect to login
            time.sleep(2)
            current_url = self.driver.current_url
            self.assertTrue("/login" in current_url)
            
            # Verify success toast
            success_toast = self.wait.until(
                EC.presence_of_element_located((By.CLASS_NAME, "sonner-toast-success"))
            )
            self.assertTrue("Signed out successfully" in success_toast.text)
            
            self.passed_tests += 1
            
        except Exception as e:
            self.failed_tests += 1
            raise

    def test_09_navigation(self):
        """Test navigation functionality"""
        try:
            # Login first
            self.login_user()
            
            # Verify sidebar navigation links
            nav_links = self.driver.find_elements(By.CSS_SELECTOR, "aside a")
            expected_routes = ['/home', '/inbox', '/friends']
            
            for i, link in enumerate(nav_links[:3]):  # Test first 3 links
                href = link.get_attribute("href")
                self.assertTrue(any(route in href for route in expected_routes))
            
            self.passed_tests += 1
            
        except Exception as e:
            self.failed_tests += 1
            raise

    def test_10_home_feed(self):
        """Test home feed loading"""
        try:
            # Login first
            self.login_user()
            
            # Wait for posts to load
            posts = self.wait.until(
                EC.presence_of_all_elements_located((By.CSS_SELECTOR, '.max-w-[400px]'))
            )
            self.assertGreater(len(posts), 0)
            
            # Verify post elements
            first_post = posts[0]
            self.assertTrue(first_post.find_element(By.CSS_SELECTOR, '.fa-heart').is_displayed())
            self.assertTrue(first_post.find_element(By.CSS_SELECTOR, '.fa-comment').is_displayed())
            self.assertTrue(first_post.find_element(By.CSS_SELECTOR, '.fa-paper-plane').is_displayed())
            
            self.passed_tests += 1
            
        except Exception as e:
            self.failed_tests += 1
            raise

    def login_user(self):
        """Helper method to perform login"""
        self.driver.get(f"{self.BASE_URL}/login")
        
        email_input = self.wait.until(
            EC.presence_of_element_located((By.ID, "email"))
        )
        password_input = self.driver.find_element(By.ID, "password")
        
        email_input.send_keys(self.TEST_EMAIL)
        password_input.send_keys(self.TEST_PASSWORD)
        
        submit_button = self.driver.find_element(By.CSS_SELECTOR, 'button[type="submit"]')
        submit_button.click()
        
        # Wait for home page
        self.wait.until(
            EC.url_contains("/home")
        )

    @classmethod
    def tearDownClass(cls):
        if hasattr(cls, 'driver'):
            cls.driver.quit()
            print("\n✅ Selenium WebDriver closed successfully")
        
        print("\n" + "="*70)
        print("📊 TEST EXECUTION SUMMARY")
        print("="*70)
        print(f"Total Tests: {cls.total_tests}")
        print(f"Passed: {cls.passed_tests}")
        print(f"Failed: {cls.failed_tests}")
        
        if cls.total_tests > 0:
            success_rate = (cls.passed_tests / cls.total_tests) * 100
            print(f"Success Rate: {success_rate:.1f}%")
        
        print("="*70)

if __name__ == '__main__':
    unittest.main(verbosity=2)
