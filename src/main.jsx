import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from './pages/Login.jsx'
import HomePage from './pages/HomePage.jsx'
import Account from './pages/Account.jsx'
import Setting from './pages/Setting.jsx'
import ViewCalendar from './pages/ViewCalendar.jsx'
import ScheduleRegistry from './pages/ScheduleRegistry.jsx'
import Task from './pages/Task.jsx'
import CreateForm from './pages/CreateForm.jsx'
import Report from './pages/Report.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { TaskProvider } from './context/TaskContext.jsx'
import { CheckInProvider } from './context/CheckInContext.jsx'

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
        path: "/task",
        element: <Task />
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
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CheckInProvider>
        <TaskProvider>
          <RouterProvider router={router}></RouterProvider>
        </TaskProvider>
      </CheckInProvider>
    </AuthProvider>
  </React.StrictMode>
)