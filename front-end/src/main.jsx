import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './global.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './pages/error'
import loadable from '@loadable/component'

const Unsubscribe = loadable(() => import('./pages/unsubscribe'));
const About = loadable(() => import('./pages/about'));
const Contact = loadable(() => import('./pages/contact'));
const Subscribe = loadable(() => import('./pages/subscribe'));



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
  {
    path:'/subscribe',
    element: <Subscribe />
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)