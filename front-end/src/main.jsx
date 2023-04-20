import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './global.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './pages/error'
import Unsubscribe from './pages/unsubscribe'
import About from './pages/about'
import Contact from './pages/contact'
import Subscribe from './pages/subscribe'

import React from 'react'

export default function main() {


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
}