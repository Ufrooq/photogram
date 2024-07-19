import { useGlobalContext } from '@/context/Context'
import { getAuth } from 'firebase/auth'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth";

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
    return (
        user ? <Outlet /> : < Navigate to="/login" />
    )


}

export default ProtectedLayout