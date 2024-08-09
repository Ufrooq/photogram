import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { useGlobalContext } from '@/context/Context';

const ProtectedLayout: React.FC = () => {
    const { isLoggedIn } = useGlobalContext()

    return (
        <>
            {
                isLoggedIn ?
                    <div className='w-full h-screen flex'>
                        < Sidebar />
                        <div className='w-full h-screen ml-[320px]'>
                            <Navbar />
                            <div className='p-[24px]'>
                                <Outlet />
                            </div>
                        </div>
                    </div >
                    :
                    <Navigate to="/login" />
            }
        </>
    )
}


export default ProtectedLayout