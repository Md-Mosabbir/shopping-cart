import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'

import Root from './components/Root.jsx'
import Shop from './components/Shop'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <App /> },
      {
        path: '/shop',
        element: <Shop />,
      },
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
