import "./Notification.css"
import { useState } from "react";

const Notification = () => {
  const [totalNot, setTotalNot] = useState(0);
  const [isVisible, setIsVisible] = useState(true)

  function handleSetTotalNot() {
    setTotalNot(t => t);
  }
  
  function handleCloseNotification() {
    setIsVisible(false);
  }

  function handleMarkAllAsRead() {
    setTotalNot(0);
  }

  if (!isVisible) return null;

  return (
    <div className="flex flex-col notification bg-white shadow-md py-7 px-5">
      <div className="notification-header flex items-center justify-between border-b-2 pb-3">
        <h1 className="font-semibold">Thông báo ({totalNot})</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg cursor-pointer" viewBox="0 0 16 16" onClick={handleCloseNotification}>
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
      </div>

      <ul className="flex flex-col gap-4 mt-3">
        <li>
          <div className="pb-2 border-b-2">
            <h3>Nhắc lịch học của học phần Giải tích 2, lớp BAS1204-20232-20.</h3>
            <p className="text-sm text-gray-500 mt-1">9 giờ trước</p>
          </div>
        </li>
        <li>
          <div className="pb-2 border-b-2">
            <h3>Nhắc lịch học của học phần Giải tích 2, lớp BAS1204-20232-20.</h3>
            <p className="text-sm text-gray-500 mt-1">9 giờ trước</p>
          </div>
        </li>
        <li>
          <div className="pb-2 border-b-2">
            <h3>Nhắc lịch học của học phần Giải tích 2, lớp BAS1204-20232-20.</h3>
            <p className="text-sm text-gray-500 mt-1">9 giờ trước</p>
          </div>
        </li>
      </ul>

      <div>
        <button className="bg-[#e9f3ff] w-full py-3 rounded-xl mt-5" onClick={handleMarkAllAsRead}>Đánh dấu tất cả là đã đọc</button>
      </div>
    </div>
  )
}

export default Notification