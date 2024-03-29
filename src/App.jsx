import NavBar from './layouts/NavBar'
import Header from './layouts/Header'

import './App.css'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

const App = () => {
    const [title, setTitle] = useState("Trang chủ");
    function handleSetTitle(event) {
        setTitle(event.target.textContent);
    }

    return (
        <div className='App bg-gradient-to-r from-[#f0f7ff] to-[#a0c0fc] flex text-[#172754]'>
            <NavBar onSetTitle={handleSetTitle}></NavBar>
            <div className='bg-[white] flex flex-col flex-auto mt-3 mr-3 ml-16 rounded-t-2xl p-5 shadow-md'>
                <Header onTitle={title}></Header>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default App;
