import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './global.css'
import { createBrowserRouter, Routerprovider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routerprovider router={router} />
  </React.StrictMode>,
)
