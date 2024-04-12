import NavBar from "./layouts/NavBar";
import Header from "./layouts/Header";
import "react-image-crop/dist/ReactCrop.css";

import "./App.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import { useAuth } from "./context/AuthContext";
import { Navigate } from "react-router-dom";


const App = () => {
    const [title, setTitle] = useState("Trang chủ");
    const { loggedIn } = useAuth();

    function handleSetTitle(event) {
        setTitle(event.target.textContent);
    }
    return (
        <div className="App bg-gradient-to-r from-[#f0f7ff] to-[#a0c0fc] flex text-[#172754]">
            <div className="sticky top-0 left-0 h-screen">
                <NavBar onSetTitle={handleSetTitle}></NavBar>
            </div>
            <Toaster richColors position="top-center" />
            <div className="bg-[white] flex flex-col flex-grow mt-3 mr-3 ml-16 rounded-t-2xl p-5 shadow-md">
                <Header onTitle={title}></Header>
                <Outlet></Outlet>
            </div>
        </div>
    )
};

export default App;
