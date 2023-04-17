import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './global.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './pages/error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
