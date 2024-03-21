import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Header from './components/Header'
import './App.css'
import HomePage from './pages/HomePage'
import Account from './pages/Account'
import Calendar from './pages/Calendar'
import TodaySchedule from './pages/TodaySchedule'
import CreateForm from './pages/CreateForm'
import Report from './pages/Report'


const App = () => {
    return (
        <div className='App bg-gradient-to-tr from-[#f0f7ff] to-[#e0eefe] flex w-screen h-screen text-[#172754]'>
            <NavBar></NavBar>
            <div className='bg-[white] flex flex-col flex-auto mt-3 mr-3 ml-16 rounded-2xl p-5 shadow-md'>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/account" element={<Account />}></Route>
                    <Route path="/calendar" element={<Calendar />}></Route>
                    <Route path="/today-schedule" element={<TodaySchedule />}></Route>
                    <Route path="/create-form" element={<CreateForm />}></Route>
                    <Route path="/report" element={<Report />}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default App