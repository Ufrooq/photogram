import { getAuth } from 'firebase/auth'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import LoadingState from '@/components/LoadingState';

const ProtectedLayout: React.FC = () => {
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return (
            <div className='w-full h-full flex justify-center items-center'>
                <LoadingState />
            </div>
        )
    }
    else {
        console.log(user)
        return (
            user ?
                <div className='w-full h-screen flex'>
                    <Sidebar />
                    <div className='w-full h-screen ml-[320px]'>
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