import React from 'react'
import { Outlet } from 'react-router-dom'

const ProtectedLayout: React.FC = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Outlet />
        </div>
    )
}

export default ProtectedLayout