import PropTypes from 'prop-types'

const FormModal = (props) => {
    return (
        <div className="flex justify-center items-center h-screen overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-25 backdrop-blur-sm">
            <div className="flex flex-col w-1/3 bg-white p-5 rounded-md">
                <div className="header flex justify-between pb-3 border-b-2">
                    <h1 className="font-semibold text-lg">{props.formData.Ten_don}</h1>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 cursor-pointer"
                        onClick={props.onSetShowModal}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                </div>
                <div className='content flex flex-col mt-3 gap-3'>
                    <div className='flex justify-between'>
                        <h1 className='font-medium'>Mã đơn: </h1>
                        <input type="text" className='bg-[#e4efff] rounded-md ml-3 p-1 w-1/2 border-[#bfd6fd] border-2' value={props.formData.Ma_don} readOnly />
                    </div>
                    <div className='flex justify-between'>
                        <h1 className='font-medium'>Ngày tạo: </h1>
                        <input type="date" className='bg-[#e4efff] rounded-md ml-3 p-1 w-1/2 border-[#bfd6fd] border-2' value={props.formData.Ngay} readOnly />
                    </div>
                    <div className='flex justify-between'>
                        <span className='font-medium'>Trạng thái: </span>
                        <input type="text" className='bg-[#e4efff] rounded-md ml-3 p-1 w-1/2 border-[#bfd6fd] border-2' value={props.formData.Trang_thai} readOnly />
                    </div>
                    <div className='flex justify-between'>
                        <span className='font-medium'>Loại đơn: </span>
                        <input type='text' className='bg-[#e4efff] rounded-md ml-3 p-1 w-1/2 border-[#bfd6fd] border-2' value={props.formData.Ma_loai_don} readOnly />
                    </div>
                    <div className='flex justify-between'>
                        <span className='font-medium'>Người duyệt: </span>
                        <input type='text' className='bg-[#e4efff] rounded-md ml-3 p-1 w-1/2 border-[#bfd6fd] border-2' value={props.formData.Nguoi_duyet} readOnly />
                    </div>
                    <div className='flex flex-col'>
                        <span className='font-medium'>Lý do: </span>
                        <textarea className='bg-[#e4efff] rounded-md p-1 mt-2 w-full border-[#bfd6fd] border-2' value={props.formData.Ly_do} readOnly />
                    </div>
                </div>
            </div>
        </div>
    )
}

FormModal.propTypes = {
    onSetShowModal: PropTypes.func,
    formData: PropTypes.object
}

export default FormModal