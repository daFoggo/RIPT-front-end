import PropTypes from "prop-types";
import ImageCropper from "./ImageCropper";

const AvatarModal = (props) => {
    return (
        <div className="flex justify-center items-center h-screen overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-25 backdrop-blur-sm">
            <div className="flex flex-col w-1/3 bg-white p-5 rounded-md">
                <div className="header flex justify-between pb-3 border-b-2">
                    <h1 className="font-semibold">Cập nhật ảnh đại diện</h1>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                        onClick={props.onSetShowModal}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                </div>
                <ImageCropper updateAvatar={props.updateAvatarUrl}></ImageCropper>
                <div className="mt-3 flex justify-end">
                    <button
                        className="bg-[#e5f0ff96] rounded-md py-2 px-5 mr-2 hover:bg-[#b7c1cfa1] hover:text-[#385092]"
                        onClick={props.onSetShowModal}
                    >
                        Huỷ
                    </button>
                    <button
                        className="bg-[#172754] text-white rounded-md py-2 px-5 hover:bg-[#2c4383] hover:text-[white]"
                        onClick={() => {
                            props.onSetShowModal();
                        }}
                    >
                        Lưu
                    </button>
                </div>
            </div>
        </div>
    );
};

AvatarModal.propTypes = {
    onSetShowModal: PropTypes.func,
    updateAvatarUrl: PropTypes.func,
};

export default AvatarModal;
