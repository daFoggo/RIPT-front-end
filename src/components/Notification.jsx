import "./Notification.css"
import { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';

const Notification = ({ onSetNotification }) => {
  console.log(onSetNotification)
  const [totalNot, setTotalNot] = useState(0);


  function handleMarkAllAsRead() {
    setTotalNot(0);
    onSetNotification();
  }

  let menuRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        onSetNotification();
      }
    }
    document.addEventListener("mousedown", handler);
  });

    return (
      <div className="flex flex-col notification bg-white shadow-md py-7 px-5" ref={menuRef}>
        <div className="notification-header border-b-2 pb-3">
          <h1 className="font-semibold">Thông báo ({totalNot})</h1>
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

Notification.propTypes = {
      onSetNotification: PropTypes.func
    }

export default Notification