import "./UserDropDown.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const UserDropDown = () => {

  const { handleLogOut } = useAuth();

  return (
    <div className="flex flex-col userDropDown bg-white shadow-md items-center text-center z-50">
      <ul className="flex flex-col gap-4">
        <li className="border-b-2">
          <Link to="/account">Hồ sơ</Link>
        </li>
        <li className="border-b-2">
          <Link to="/setting">Cài đặt</Link>
        </li>
        <li className="border-b-2">
          <Link to="/login" onClick={handleLogOut}>Đăng xuất</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserDropDown;
