import ReactDOM from 'react-dom/client'
import './index.css'
import "./App.css"
import { RouterProvider } from 'react-router-dom'
import RouterMain from './router/index.routes.tsx'
import { Toaster } from 'sonner'
import ContextProvider from './context/ContextProvider.tsx'
import { StrictMode } from 'react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={RouterMain} />
      <Toaster position="bottom-right" richColors closeButton />,
    </ContextProvider>
  </StrictMode>

)
