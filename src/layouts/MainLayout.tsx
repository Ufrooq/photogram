import ContextProvider from '@/context/ContextProvider'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {

    return (
        <>
            <ContextProvider>
                <Outlet />
            </ContextProvider >
        </>
    )
}

export default MainLayout