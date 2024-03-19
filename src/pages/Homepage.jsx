import Notification from "../components/Notification";
import { useState } from "react";
import "./Homepage.css"
import { Link } from "react-router-dom";
const Homepage = () => {
  const [notification, setNotification] = useState(false);
  const [header, setHeader] = useState("Trang chủ");

  function handleSetNotification() {
    setNotification(n => !n);
  }

  function handleSetHeader(event) {
    setHeader(event.target.value);
  }
  
  return (
    <div className="home-page bg-gradient-to-tr from-[#f0f7ff] to-[#e0eefe] flex w-screen h-screen">
      {/* Left  Bar */}
      <div className="navBar flex flex-col pl-5 pt-3">
        {/* Logo */}
        <Link to="/">
          <div className="logo">
            <h1>@RIPT</h1>
          </div>
        </Link>

        {/* Links */}
        <div className="links flex flex-col mt-12">

          <a href="" className="mb-8 flex items-center hover:bg-[#d2e7fe] hover:text-[#1e3e8a] duration-200 p-1 rounded" onClick={handleSetHeader}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
            </svg>
            <p className="ml-2">Trang chủ</p>
          </a>

          <a href="" className="mb-8 flex items-center hover:bg-[#d2e7fe] hover:text-[#1e3e8a] duration-200 p-1 rounded" onClick={handleSetHeader}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
              <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
            </svg>
            <p className="ml-2">Tài khoản</p>
          </a>

          <a href="" className="mb-8 flex items-center hover:bg-[#d2e7fe] hover:text-[#1e3e8a] duration-200 p-1 rounded" onClick={handleSetHeader}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-check" viewBox="0 0 16 16">
              <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>
            <p className="ml-2">Lịch</p>
          </a>

          <a href="" className="mb-8 flex items-center hover:bg-[#d2e7fe] hover:text-[#1e3e8a] duration-200 p-1 rounded" onClick={handleSetHeader}> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list-task" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z" />
              <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z" />
              <path fillRule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z" />
            </svg>
            <p className="ml-2">
              Công việc hôm nay
            </p>
          </a>

          <a href="" className="mb-8 flex items-center hover:bg-[#d2e7fe] hover:text-[#1e3e8a] duration-200 p-1 rounded" onClick={handleSetHeader}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-plus" viewBox="0 0 16 16">
              <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5" />
              <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
            </svg>
            <p className="ml-2">Tạo đơn</p>
          </a>

          <a href="" className="flex items-center hover:bg-[#d2e7fe] hover:text-[#1e3e8a] duration-200 p-1 rounded" onClick={handleSetHeader}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-bar-graph" viewBox="0 0 16 16">
              <path d="M10 13.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5z" />
              <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
            </svg>
            <p className="ml-2">Báo cáo</p>
          </a>

        </div>
      </div>

      {/* Main */}
      <div className="main bg-[white] flex flex-col flex-auto mt-3 mr-3 ml-16 rounded-2xl p-5 shadow-md">

        {/* Header */}
        <div className="flex justify-between mb-12 border-b-2 pb-3">
          <div>
            <h1 className="text-2xl font-semibold">{header}</h1>
          </div>

          <div>
            <div className="user-and-not flex justify-end items-center">
              {/* Notification Button */}
              <div className="notification bg-[#e2effe] p-2 rounded ml-8 cursor-pointer mr-3 hover:scale-105 duration-300" onClick={handleSetNotification}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                </svg>
              </div>

              {/* User */}
              <div className="user flex justify-between border-l-2 pl-3">
                <div className="avatar mr-4">
                  <img className="w-10 h-10 p-1 rounded-full ring-2 ring-[#172754] dark:ring-[#172754]" src="src/assets/imgs/logo.jpg"></img>
                </div>
                <div className="name-and-role">
                  <h3 className="user-name text-sm">Nguyễn Trường Giang</h3>
                  <p className="role text-xs text-slate-500">Nhân viên</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="today-schedule">
          <p className="text-xl">Today&apos;s schedule</p>

        </div>
        <div className="tasks flex flex-col py-5">
          <p className="text-xl">Tasks</p>
          <div className="flex">
            <div className="today-tasks flex-1">
              today-task
            </div>
            <div className="previous-tasks flex-1">
              previous-tasks
            </div>
          </div>
        </div>
        <div className="week-calendar">
          <p className="text-xl">Week&apos;s schedule</p>
        </div>
      </div>

      {/* Show Notification */}
      {notification && <Notification />}

    </div>
  )
}

export default Homepage