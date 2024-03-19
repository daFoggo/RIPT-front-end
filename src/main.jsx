import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Homepage from './pages/Homepage.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Homepage />,
      errorElement: <div>404 Not Found</div>
    },
    {
      path: '/login',
      element: <Login />,
      errorElement: <div>404 Not Found</div>
    },
    {
      path: '/signup',
      element: <Signup />,
      errorElement: <div>404 Not Found</div>
    }
  ]
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
