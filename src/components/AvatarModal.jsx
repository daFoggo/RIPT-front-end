import PropTypes from 'prop-types'

const AvatarModal = (props) => {
    return (
        <div className="flex justify-center items-center h-screen overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-25 backdrop-blur-sm">
            <div className="flex flex-col w-1/3 bg-white p-5 rounded-md">
                <div className="header flex justify-between pb-3 border-b-2">
                    <h1 className="font-semibold">Cập nhật ảnh đại diện</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className='dragArea mt-3 flex flex-col gap-3 border-b-2 pb-3'>
                    <div className='flex justify-center items-center h-40 border-2 border-dashed rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <p><b>Kéo và thả ảnh</b> vào đây hoặc <b>chọn ảnh</b> từ máy</p>
                    </div>
                    <input type="file"
                        className="file:bg-[#172754] file:text-white file:rounded-md file:py-2 file:px-5 file:hover:bg-[#2c4383] file:hover:text-[white] file:border-none"/>
                </div>
                <div className='mt-3 flex justify-end'>
                    <button className='bg-[#e5f0ff96] rounded-md py-2 px-5 mr-2 hover:bg-[#b7c1cfa1] hover:text-[#385092]' onClick={props.onSetShowModal}>Huỷ</button>
                    <button className='bg-[#172754] text-white rounded-md py-2 px-5 hover:bg-[#2c4383] hover:text-[white]' onClick={props.onSetShowModal}>Lưu</button>
                </div>
            </div>
        </div>
    )
}

AvatarModal.propTypes = {
    onSetShowModal: PropTypes.func
}

export default AvatarModal