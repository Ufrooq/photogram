import MainLayout from "@/layouts/MainLayout";
import { AUTH_ROUTES, PROTECTED_ROUTES, UNPROTECTED_ROUTES } from "./routes.constant";
import Welcome from "@/pages/Welcome";
import { createBrowserRouter } from "react-router-dom";
import About from "@/pages/About";
import Error from "@/pages/Error";
import AuthLayout from "@/layouts/AuthLayout";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import ProtectedLayout from "@/layouts/ProtectedLayout";
import Home from "@/pages/Home";
import CreatePost from "@/pages/CreatePost";
import Profile from "@/pages/Profile";
import MyPosts from "@/pages/MyPosts";

const RouterMain = createBrowserRouter([
    {
        path: UNPROTECTED_ROUTES.welcomePage,
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Welcome />
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
                        path: PROTECTED_ROUTES.profilePage,
                        element: <Profile />
                    },
                    {
                        path: PROTECTED_ROUTES.postsPage,
                        element: <MyPosts />
                    }
                ]
            }

        ]
    }
])

export default RouterMain;