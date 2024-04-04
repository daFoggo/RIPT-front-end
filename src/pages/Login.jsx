import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { toast, Toaster } from "sonner";
import axios from "axios";

import "./Login.css";
import { useAuth } from "../context/AuthContext.jsx";

axios.defaults.withCredentials = true;

const Login = () => {
  const { handleLogIn, loggedIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (email === "" || password === "") {
      toast.error("Vui lòng nhập đầy đủ thông tin");
      console.log("error");
      return;
    } else {
      try {
        const response = await axios.get(
          "http://192.168.10.160:8088/web/session/authenticate",
          {
            "jsonrpc": "2.0",
            "params": {
              "db": "lms_vwa",
              "login": "admin@gmail.com",
              "password": "@Abc12345",
            }
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        
        const session_id = response;

        console.log(session_id)
        if (!session_id) {
          toast.error("Sai mật khẩu hoặc tài khoản")
        } else {
          handleLogIn(session_id);
          toast.success("Đăng nhập thành công");
        }
      } catch (error) {
        console.log("Đã có lỗi xảy ra", error);
      }
    }
  }

  function handleSetShowPassword() {
    setShowPassword((s) => !s);
  }

  if (loggedIn) {
    return <Navigate to="/"></Navigate>
  }
  return (
    <div className="login-page">
      <Toaster richColors position="top-center" />
      <section className="min-h-screen flex items-center justify-center backdrop-blur-sm">
        <div className="flex shadow-lg max-w-3xl p-5 rounded-xl bg-gradient-to-r from-[#f0f7ff] to-[#e0eefe]">
          {/* Form */}
          <div className="sm:w-1/2 px-8 flex flex-col justify-between">
            <h2 className="text-[#0a175c]">ĐĂNG NHẬP</h2>
            <p className="text-sm mt-4 text-[#0a175c]">
              Cổng đăng nhập phòng Công Nghệ Số
            </p>

            <form action="" className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-xl border border-blue-200 text-sm"
                type="text"
                name="email"
                placeholder="Email"
                autoComplete="off"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border border-blue-200 w-full text-sm"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div onClick={handleSetShowPassword}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-eye-fill absolute top-1/2 right-3 -translate-y-1/2"
                    viewBox="0 0 16 16"
                  >
                    {!showPassword ? (
                      <>
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                      </>
                    ) : (
                      <>
                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                        <path
                          d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"
                          onClick={handleSetShowPassword}
                        />
                        <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                      </>
                    )}
                  </svg>
                </div>
              </div>
              <Link to="/">
                <div className="flex">
                  <button
                    className="bg-[#2f61ff] rounded-xl text-white py-2 hover:scale-105 hover:bg-[#0c30ff] duration-300 flex-1"
                    onClick={handleSubmit}
                  >
                    Đăng nhập
                  </button>
                </div>
              </Link>
            </form>

            <div className="">
              <a
                href="https://ript.vn/"
                className=" text-sm flex items-center justify-between mt-20"
              >
                <p className=" mt-4 text-[#0a175c]">
                  Viện khoa học kỹ thuật bưu điện | RIPT
                </p>
                <img
                  className="h-10 w-10"
                  src="src\assets\imgs\RIPT-Logo.png"
                  alt=""
                />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="w-1/2 p sm:block hidden">
            <img
              className="rounded-xl"
              src="src\assets\imgs\sinhvien1 copy.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
