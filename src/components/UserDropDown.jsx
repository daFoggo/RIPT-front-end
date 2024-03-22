import "./UserDropDown.css"
import { Link } from "react-router-dom"

const UserDropDown = () => {
  return (
    <div className="flex flex-col userDropDown bg-white shadow-md items-center text-center">
      <ul className="flex flex-col gap-4">
        <li className="border-b-2">
          <Link to="/account">Hồ sơ</Link>
        </li>
        <li className="border-b-2">
          <Link>Cài đặt</Link></li>
        <li className="border-b-2">
          <Link>Đăng xuất</Link>
        </li>
      </ul>
    </div>
  )
}

export default UserDropDown