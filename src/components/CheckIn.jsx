import { useCheckIn } from "../context/CheckInContext"

const CheckIn = () => {

    const { isCheckedIn } = useCheckIn();
    const handleSetIsCheckedIn = useCheckIn().handleSetIsCheckedIn;
    
    return (
        isCheckedIn === false ? (
            <div className="bg-[#21387a] rounded py-1 px-2 text-white hover:scale-[1.05] hover:bg-[#2c4383] duration-300" onClick={handleSetIsCheckedIn}>
                <button className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <h1>Chưa điểm danh</h1>
                </button>
            </div>
        ) : (
            <div className="bg-[#21387a] rounded py-1 px-2 text-white hover:scale-[1.05] hover:bg-[#2c4383] duration-300">
                <button className="flex items-center gap-1" onClick={handleSetIsCheckedIn}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <h1>Đã điểm danh </h1>
                </button>
            </div>
        )
    )
}

export default CheckIn