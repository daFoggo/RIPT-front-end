import { useCheckIn } from "../context/CheckInContext";

const CreateEarlyForm = () => {
  const { handleSetShowEarlyFormPopUp, handleSetShowEarlyForm } = useCheckIn();

  function closePopUpAndShowForm(){
    handleSetShowEarlyFormPopUp();
    handleSetShowEarlyForm();
  }

  return (
    <div className="flex justify-center items-center h-screen overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="flex flex-col w-1/3 bg-white p-5 rounded-md">
        <div className="header flex justify-between pb-3 border-b-2">
          <h1 className="font-semibold text-lg">Tạo đơn về sớm</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={handleSetShowEarlyFormPopUp}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div>
          <p className="mt-3">Bạn chưa làm đủ thời gian. <br />
            Bạn có muốn tạo <b>đơn xin về sớm</b> không?</p>
        </div>
        <div className="mt-3 flex justify-end">
          <button
            className="bg-[#e5f0ff96] rounded-md py-2 px-5 mr-2 hover:bg-[#b7c1cfa1] hover:text-[#385092]"
            onClick={handleSetShowEarlyFormPopUp}
          >
            Không
          </button>
          <button
            className="bg-[#172754] text-white rounded-md py-2 px-5 hover:bg-[#2c4383] hover:text-[white]"
            onClick={closePopUpAndShowForm}
          >
            Có
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateEarlyForm