import { PROTECTED_ROUTES } from '@/router/routes.constant';
import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

const AccountLayout = () => {
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <nav></nav>
            <div>
                <h1 className='page_heading'>Profile</h1>
                <p className='page_sub_heading'>
                    Welcome to your account details, you can edit your info here.
                </p>
            </div>
            <nav className='my-4 flex gap-4 text-slate-800 font-semibold'>
                <NavLink
                    to="/profile"
                    className={`${location.pathname == "/profile" ? "text-black" : "text-slate-500"}`}
                >
                    Account Info
                </NavLink>
                <NavLink
                    className={`${location.pathname == "/profile/update-profile" ? "text-black" : "text-slate-500"}`}
                    to="/profile/update-profile"
                >
                    Update Account Info
                </NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

export default AccountLayout