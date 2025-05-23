import MainLayout from "@/layouts/MainLayout";
import { AUTH_ROUTES, PROTECTED_ROUTES, UNPROTECTED_ROUTES } from "./routes.constant";
import { createBrowserRouter, Navigate } from "react-router-dom";
import About from "@/pages/About";
import Error from "@/pages/Error";
import AuthLayout from "@/layouts/AuthLayout";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import ProtectedLayout from "@/layouts/ProtectedLayout";
import Home from "@/pages/Home";
import CreatePost from "@/pages/CreatePost";
import MyPosts from "@/pages/MyPosts";
import AccountLayout from "@/layouts/AccountLayout";
import UpdateProfile from "@/pages/UpdateProfile";
import ProfileInfo from "@/pages/ProfileInfo";
import Friends from "@/pages/Friends";
import Inbox from "@/pages/Inbox";


const RouterMain = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to={AUTH_ROUTES.loginPage} replace />,
            },
            {
                path: UNPROTECTED_ROUTES.aboutPage,
                element: <About />
            },
            {
                path: UNPROTECTED_ROUTES.errorPage,
                element: <Error />
            },
            {
                element: <AuthLayout />,
                children: [
                    {
                        path: AUTH_ROUTES.loginPage,
                        element: <Login />
                    },
                    {
                        path: AUTH_ROUTES.signUpPage,
                        element: <Signup />
                    }
                ]
            },
            {
                element: <ProtectedLayout />,
                children: [
                    {
                        path: PROTECTED_ROUTES.homePage,
                        element: <Home />
                    },
                    {
                        path: PROTECTED_ROUTES.createPage,
                        element: <CreatePost />
                    },
                    {
                        path: PROTECTED_ROUTES.postsPage,
                        element: <MyPosts />
                    },
                    {
                        path: PROTECTED_ROUTES.friendsListPage,
                        element: <Friends />
                    },
                    {
                        path: PROTECTED_ROUTES.inboxPage,
                        element: <Inbox />
                    },
                    {
                        path: PROTECTED_ROUTES.profilePage,
                        element: <AccountLayout />,
                        children: [
                            {
                                index: true,
                                element: <ProfileInfo />
                            },
                            {
                                path: `${PROTECTED_ROUTES.profilePage}/${PROTECTED_ROUTES.updateAccountInfo}`,
                                element: <UpdateProfile />
                            }

                        ]
                    },
                ]
            }

        ]
    },
    {
        path: '/',
        element: <Navigate to={AUTH_ROUTES.loginPage} replace />,
    },
])

export default RouterMain;