import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './global.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './pages/error'
import Unsubscribe from './pages/unsubscribe'
import About from './pages/about'
import Contact from './pages/contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: '/unsubscribe',
    element: <Unsubscribe />,
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
