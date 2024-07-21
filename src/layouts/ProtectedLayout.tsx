import { useGlobalContext } from '@/context/Context'
import { getAuth } from 'firebase/auth'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

const ProtectedLayout: React.FC = () => {
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);
    const { isLoggedIn } = useGlobalContext()

    if (loading) {
        return (
            <div>
                <h1 className='text-4xl'>.....Loading</h1>
            </div>
        )
    }
    else {
        return (
            user ?
                <div className='w-full h-screen flex'>
                    <Sidebar />
                    <div className='w-full h-screen'>
                        <Navbar />
                        <div className='p-[24px]'>
                            <Outlet />
                        </div>
                    </div>
                </div>
                :
                < Navigate to="/login" />
        )
    }

}

export default ProtectedLayout