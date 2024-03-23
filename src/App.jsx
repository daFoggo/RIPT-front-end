import NavBar from './components/NavBar'
import Header from './components/Header'
import './App.css'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

const App = () => {
    const [title, setTitle] = useState("Trang chủ");
    function handleSetTitle(event) {
        setTitle(event.target.textContent);
    }

    return (
        <div className='App bg-gradient-to-r from-[#f0f7ff] to-[#a0c0fc] flex w-screen h-screen text-[#172754]'>
            <NavBar onSetTitle={handleSetTitle}></NavBar>
            <div className='bg-[white] flex flex-col flex-auto mt-3 mr-3 ml-16 rounded-2xl p-5 shadow-md'>
                <Header onTitle={title}></Header>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default App