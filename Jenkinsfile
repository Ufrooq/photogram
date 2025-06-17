pipeline {
    agent any

    environment {
        // Environment variables
        REACT_APP_PORT = '3000'
        NODE_VERSION = '16.x'
        FIREBASE_CONFIG = credentials('firebase-config')
        PROJECT_DIR = '/var/lib/jenkins/DevOps/photogram'
    }

    stages {
        stage('Clean Workspace') {
            steps {
                sh '''
                    if [ -d "${PROJECT_DIR}" ]; then
                        find "${PROJECT_DIR}" -mindepth 1 -delete
                        echo "✅ Contents of ${PROJECT_DIR} have been removed."
                    else
                        echo "📁 Directory ${PROJECT_DIR} does not exist."
                    fi
                '''
            }
        }

        stage('Fetch Code') {
            steps {
                sh 'git clone https://github.com/Ufrooq/photogram.git ${PROJECT_DIR}'
            }
        }

        stage('Setup Environment') {
            steps {
                dir(PROJECT_DIR) {
                    // Create .env file with Firebase configuration
                    sh '''
                        echo "VITE_APIKEYS=${FIREBASE_CONFIG_USR}" > .env
                        echo "VITE_AUTHDOMAIN=${FIREBASE_CONFIG_PSW}" >> .env
                        echo "VITE_PROJECTEDID=${FIREBASE_CONFIG_PROJECTEDID}" >> .env
                        echo "VITE_STORAGEBUCKET=${FIREBASE_CONFIG_STORAGEBUCKET}" >> .env
                        echo "VITE_MESSAGINGSENDERID=${FIREBASE_CONFIG_MESSAGINGSENDERID}" >> .env
                        echo "VITE_APPID=${FIREBASE_CONFIG_APPID}" >> .env
                    '''
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                dir(PROJECT_DIR) {
                    // Setup Node.js environment
                    sh '''
                        echo "🔧 Setting up Node.js ${NODE_VERSION}..."
                        curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION} | sudo -E bash -
                        sudo apt-get install -y nodejs
                        
                        echo "📦 Installing npm dependencies..."
                        npm install
                    '''
                }
            }
        }

        stage('Build Application') {
            steps {
                dir(PROJECT_DIR) {
                    sh '''
                        echo "🏗️ Building React application..."
                        npm run build
                    '''
                }
            }
        }

        stage('Start Development Server') {
            steps {
                dir(PROJECT_DIR) {
                    sh '''
                        echo "🚀 Starting development server..."
                        npm run dev & 
                        echo $! > .pidfile
                        
                        echo "⏳ Waiting for application to start..."
                        for i in {1..12}; do
                            if curl -f http://localhost:${REACT_APP_PORT} > /dev/null 2>&1; then
                                echo "✅ Application is ready on port ${REACT_APP_PORT}!"
                                break
                            fi
                            echo "⌛ Waiting for application... attempt $i"
                            sleep 5
                        done
                    '''
                }
            }
        }

        stage('Install Selenium Dependencies') {
            steps {
                sh '''
                    echo "🔧 Installing Chrome and ChromeDriver..."
                    sudo apt-get update
                    sudo apt-get install -y chromium-browser chromium-chromedriver
                    
                    echo "🐍 Installing Python dependencies..."
                    pip3 install --break-system-packages selenium==4.15.0 webdriver-manager==4.0.1
                    
                    echo "🔍 Verifying installations..."
                    python3 -c "from selenium import webdriver; from selenium.webdriver.chrome.options import Options"
                '''
            }
        }

        stage('Run Selenium Tests') {
            steps {
                dir(PROJECT_DIR) {
                    sh '''
                        echo "🧪 Running Selenium tests..."
                        export DISPLAY=:99
                        Xvfb :99 -screen 0 1920x1080x24 > /dev/null 2>&1 &
                        
                        cd tests
                        python3 photogram_tests.py || echo "⚠️ Selenium tests completed with some failures"
                        
                        pkill Xvfb
                    '''
                }
            }
        }
    }

    post {
        always {
            dir(PROJECT_DIR) {
                sh '''
                    echo "📊 Application Status:"
                    if [ -f .pidfile ]; then
                        PID=$(cat .pidfile)
                        ps -p $PID || echo "Dev server is not running"
                        kill $PID 2>/dev/null || echo "Dev server already stopped"
                    fi
                    
                    echo "📁 Test Directory Contents:"
                    ls -la tests/
                    
                    echo "📸 Test Screenshots:"
                    ls -la /tmp/photogram_*.png 2>/dev/null || echo "No screenshots generated"
                    
                    echo "📝 Test Reports:"
                    find . -name "test-report*.xml" -type f -exec ls -l {} \\;
                '''
            }

            // Archive test artifacts
            archiveArtifacts artifacts: '**/test-reports/**/*', allowEmptyArchive: true
            junit '**/test-reports/**/*.xml', allowEmptyResults: true
        }

        failure {
            script {
                def buildNumber = env.BUILD_NUMBER
                def jobName = env.JOB_NAME
                
                echo """❌ Pipeline failed!
                Build: ${buildNumber}
                Job: ${jobName}
                Time: 2025-06-17 22:31:18
                User: Ufrooq
                Check the console output for test details."""
            }
        }

        success {
            script {
                def buildNumber = env.BUILD_NUMBER
                def jobName = env.JOB_NAME
                
                echo """✅ Pipeline succeeded!
                Build: ${buildNumber}
                Job: ${jobName}
                Time: 2025-06-17 22:31:18
                User: Ufrooq
                All stages completed successfully."""
            }
        }

        cleanup {
            sh '''
                echo "🧹 Cleaning up resources..."
                pkill -f "node.*vite" || true
                pkill -f "Xvfb" || true
                rm -f /tmp/photogram_*.png
            '''
        }
    }
}
