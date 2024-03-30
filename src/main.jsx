import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import HomePage from './pages/HomePage.jsx'
import Account from './pages/Account.jsx'
import Setting from './pages/Setting.jsx'
import ViewCalendar from './pages/ViewCalendar.jsx'
import ScheduleRegistry from './pages/ScheduleRegistry.jsx'
import TodayTask from './pages/TodayTask.jsx'
import CreateForm from './pages/CreateForm.jsx'
import Report from './pages/Report.jsx'
import { AuthProvider } from "./context/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/account",
        element: <Account />
      },
      {
        path: "/setting",
        element: <Setting />
      },
      {
        path: "/viewCalendar",
        element: <ViewCalendar />
      },
      {
        path: "/schedule-registry",
        element: <ScheduleRegistry />
      },
      {
        path: "/today-task",
        element: <TodayTask />
      },
      {
        path: "/create-form",
        element: <CreateForm />
      },
      {
        path: "/report",
        element: <Report />
      }
    ],
    errorElement: <div>Not Found</div>
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <div>Not Found</div>
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <div>Not Found</div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)