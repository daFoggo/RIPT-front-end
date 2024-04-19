import { useCheckIn } from '../context/CheckInContext';
import { toast } from 'sonner'

const EarlyForm = () => {
    const { handleSetShowEarlyForm, setIsCheckedOut } = useCheckIn();

    function createForm() {
        handleSetShowEarlyForm();
        setIsCheckedOut((i) => !i);
        toast.success("Đã tạo đơn và kết thúc phiên!");
        console.log("Thời gian kết thúc phiên", new Date().toLocaleTimeString());
    }

    return (
        <div className="flex justify-center items-center h-screen overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-25 backdrop-blur-sm">
            <div className="flex flex-col w-1/3 bg-white p-5 rounded-md">
                <div className="header flex justify-between pb-3 border-b-2">
                    <h1 className="font-semibold">Tạo đơn</h1>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 cursor-pointer"
                        onClick={handleSetShowEarlyForm} 
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                </div>
                <div className='content flex flex-col mt-3 gap-3 border-b-2 pb-3'>
                    <div className='flex gap-3 items-center'>
                        <label htmlFor="formTitleInput" className='font-medium'>Tiêu đề</label>
                        <input type="text" id='formTitleInput' className='bg-transparent p-2 border-b-2 flex-1 outline-none' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="formTitleInput" className='font-medium'>Lý do :</label>
                        <textarea name="" id="formReasonInput" cols="30" rows="10" className='bg-[#e4efff] p-2 rounded-md border-[#bfd6fd] border-2'></textarea>
                    </div>
                </div>
                <div className="mt-3 flex justify-end">
                    <button
                        className="bg-[#e5f0ff96] rounded-md py-2 px-5 mr-2 hover:bg-[#b7c1cfa1] hover:text-[#385092]"
                        onClick={handleSetShowEarlyForm}
                    >
                        Huỷ
                    </button>
                    <button
                        className="bg-[#172754] text-white rounded-md py-2 px-5 hover:bg-[#2c4383] hover:text-[white]"
                        onClick={createForm}
                    >
                        Lưu
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EarlyForm;
