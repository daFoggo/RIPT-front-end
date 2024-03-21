import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Homepage from './pages/Homepage.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Account from './pages/Account.jsx'
import Calendar from './pages/Calendar.jsx'
import TodaySchedule from './pages/TodaySchedule.jsx'
import CreateForm from './pages/CreateForm.jsx'
import Report from './pages/Report.jsx'

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
    },
    {
      path: '/account',
      element: <Account />,
      errorElement: <div>404 Not Found</div>
    },
    {
      path: '/calendar',
      element: <Calendar />,
      errorElement: <div>404 Not Found</div>
    },
    {
      path: '/today-schedule',
      element: <TodaySchedule />,
      errorElement: <div>404 Not Found</div>
    },
    {
      path: '/create-form',
      element: <CreateForm />,
      errorElement: <div>404 Not Found</div>
    },
    {
      path: '/report',
      element: <Report />,
      errorElement: <div>404 Not Found</div>
    }
  ]
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
