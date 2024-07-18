import { useGlobalContext } from '@/context/Context'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedLayout: React.FC = () => {
    const { isLoggedIn } = useGlobalContext()
    return (
        isLoggedIn ? <Outlet /> : < Navigate to="/login" />
    )

}

export default ProtectedLayout