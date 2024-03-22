import "./UserDropDown.css"
import { Link } from "react-router-dom"
import {useEffect, useRef} from "react";
import PropTypes from 'prop-types';

const UserDropDown = (props) => {
  let menuRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        props.onSetUserDropDown();
      }
    }
    document.addEventListener("mousedown", handler);
  });

  return (
    <div className="flex flex-col userDropDown bg-white shadow-md items-center text-center" ref={menuRef}>
      <ul className="flex flex-col gap-4">
        <li className="border-b-2">
          <Link to="/account">Hồ sơ</Link>
        </li>
        <li className="border-b-2">
          <Link to="/setting">Cài đặt</Link></li>
        <li className="border-b-2">
          <Link to="/login">Đăng xuất</Link>
        </li>
      </ul>
    </div>
  )
}

UserDropDown.propTypes = {
  onSetUserDropDown: PropTypes.func
}

export default UserDropDown