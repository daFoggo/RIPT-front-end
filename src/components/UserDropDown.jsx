import "./UserDropDown.css"

const UserDropDown = () => {
  return (
    <div className="flex flex-col userDropDown bg-white shadow-md items-center text-center">
        <ul className="flex flex-col gap-4">
            <a href=""><li className="border-b-2">Hồ sơ</li></a>
            <a href=""><li className="border-b-2">Cài đặt</li></a>
            <a href=""><li>Đăng xuất</li></a>
        </ul>
    </div>
  )
}

export default UserDropDown