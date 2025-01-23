import ReactDOM from 'react-dom/client'
import './index.css'
import "./App.css"
import { RouterProvider } from 'react-router-dom'
import RouterMain from './router/index.routes.tsx'
import { Toaster } from 'sonner'
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
    <RouterProvider router={RouterMain} />
    <Toaster position="bottom-right" richColors closeButton />,
  </React.Fragment>

)
