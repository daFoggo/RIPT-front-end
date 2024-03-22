import { useState } from "react";
import "./Header.css"
import Notification from "./Notification";
import UserDropDown from "./UserDropDown";

const Header = () => {
    const [notification, setNotification] = useState(false);
    const [userDropDown, setUserDropDown] = useState(false);
    
    function handleSetNotification() {
        setNotification(n => !n);
    }

    function handleSetUserDropDown() {
        setUserDropDown(u => !u);
    }


    return (
        <div>
            {/* Header */}
            <div className="flex justify-between mb-12 border-b-2 pb-3">
                <div>
                    <h1 className="text-2xl font-semibold">Trang chủ</h1>
                </div>

                <div>
                    <div className="user-and-not flex justify-end items-center">
                        {/* Notification Button */}
                        <div className="notification-button bg-[#e2effe] p-2 rounded ml-8 cursor-pointer mr-3 hover:scale-110 duration-300" onClick={handleSetNotification}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                            </svg>
                        </div>
                        {notification && <Notification className="active" onSetNotification={handleSetNotification} />}

                        {/* User */}
                        <div className="user flex justify-between border-l-2 pl-3 cursor-pointer" onClick={handleSetUserDropDown}>
                            <div className="avatar mr-4">
                                <img className="w-10 h-10 p-1 rounded-full ring-2 ring-[#172754] dark:ring-[#172754]" src="src/assets/imgs/logo.jpg"></img>
                            </div>
                            <div className="name-and-role">
                                <h3 className="user-name text-sm">Nguyễn Trường Giang</h3>
                                <p className="role text-xs text-slate-500">Nhân viên</p>
                            </div>
                        </div>
                        {userDropDown && <UserDropDown className="active" onSetUserDropDown={handleSetUserDropDown}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header