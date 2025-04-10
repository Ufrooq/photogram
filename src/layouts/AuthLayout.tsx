import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import authImg from "../assets/undraw_secure_login_pdn4 (1).svg"
import { useGlobalContext } from '@/context/Context'
import { PROTECTED_ROUTES } from '@/router/routes.constant'


const AuthLayout: React.FC = () => {
    const { isLoggedIn } = useGlobalContext()

    if (isLoggedIn) {
        return <Navigate to={PROTECTED_ROUTES.homePage} />
    }
    return (
        <div className='w-full h-[100vh] p-6'>
            <h1 className='text-2xl uppercase text-center font-semibold text-slate-800'>
                <span>Photogram</span> Authorization
            </h1>
            <div className='w-[90%] h-[70%] mx-auto flex md:flex-row flex-col items-center justify-around mt-20'>
                <Outlet />
                <div className='lg:block hidden'>
                    <img src={authImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AuthLayout;
