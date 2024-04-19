import { useCheckIn } from "../context/CheckInContext";
import CreateEarlyFormPopUp from "./CreateEarlyFormPopUp";
import EarlyForm from "./EarlyForm";

const CheckIn = () => {
    const { isCheckedIn, handleSetIsCheckedIn, handleSetIsCheckedOut, showEarlyFormPopUp, showEarlyForm } = useCheckIn();

    return (
        <div>
            {!isCheckedIn ? (
                <div className="bg-[#21387a] rounded py-1 px-2 text-white hover:scale-[1.05] hover:bg-[#2c4383] duration-300" onClick={handleSetIsCheckedIn}>
                    <button className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                        <h1>Bắt đầu phiên</h1>
                    </button>
                </div>
            ) : (
                <div className="bg-[#21387a] rounded py-1 px-2 text-white hover:scale-[1.05] hover:bg-[#2c4383] duration-300">
                    <button className="flex items-center gap-1" onClick={handleSetIsCheckedOut}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <h1>Kết thúc phiên</h1>
                    </button>
                </div>
            )}
            {showEarlyFormPopUp && <CreateEarlyFormPopUp />}
            {showEarlyForm && <EarlyForm />}
        </div>
    );
}

export default CheckIn;
