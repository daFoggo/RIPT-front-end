import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Login = () => {
    return (
        <div className="signup-page">
            <section className="min-h-screen flex items-center justify-center backdrop-blur-sm">
                <div className="flex shadow-lg max-w-3xl p-5 rounded-xl bg-gradient-to-r from-[#f0f7ff] to-[#e0eefe]">
                    {/* Form */}
                    <div className="px-8">

                        <h2 className="text-[#0a175c]">ĐĂNG KÍ TÀI KHOẢN</h2>
                        <p className="text-sm mt-4 text-[#0a175c]">Cổng đăng kí phòng Công Nghệ Số</p>

                        <form action="" className="flex flex-col gap-4">
                            <input className="p-2 mt-8 rounded-xl border border-blue-200 text-sm" type="text" name="userName" placeholder="Họ và tên" />
                            <input className="p-2 rounded-xl border border-blue-200 text-sm" type="text" name="phone" placeholder="Số điện thoại" />
                            <div className="flex justify-between">
                                <input className="p-2 rounded-xl border border-blue-200 text-sm flex-1 mr-1" type="date" />
                                <select className="p-2 rounded-xl border border-blue-200 text-sm flex-1 ml-1 bg-white" name="role" id="selectRole">
                                    <option value="">Chức vụ</option>
                                    <option value="staff">Nhân viên</option>
                                    <option value="manager">Quản lí</option>
                                </select>
                            </div>
                            <input className="p-2 rounded-xl border border-blue-200 text-sm" type="text" name="email" placeholder="Email" />
                            <input className="p-2 rounded-xl border border-blue-200 w-full text-sm" type="password" name="password" placeholder="Mật khẩu" />
                            <input className="p-2 rounded-xl border border-blue-200 w-full text-sm" type="password" name="confirmPassword" placeholder="Xác nhận mật khẩu" />
                                <Link to="/login">
                                <div className="flex">
                                    <button className="bg-[#2f61ff] rounded-xl flex-1 text-white py-2 hover:scale-105 hover:bg-[#0c30ff] duration-300">Đăng kí</button>
                                </div>
                                </Link>
                        </form>
                        <div>
                            <a href="https://ript.vn/" className=" text-sm flex items-center justify-between mt-20">
                                <p className=" mt-4 text-[#0a175c]">Viện khoa học kỹ thuật bưu điện | RIPT</p>
                                <img className="h-10 w-10" src="src\assets\imgs\RIPT-Logo.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login