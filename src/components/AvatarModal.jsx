import PropTypes from "prop-types";
import ImageCropper from "./ImageCropper";

const AvatarModal = (props) => {
    return (
        <div className="flex justify-center items-center h-screen overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-25 backdrop-blur-sm">
            <div className="flex flex-col w-1/3 max-h-[100dvh] bg-white p-5 rounded-md">
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
                <div>
                    <ImageCropper child2updateAvatarUrl={props.childUpdateAvatarUrl} child2OnSetShowModal={props.onSetShowModal}></ImageCropper>
                </div>
            </div>
        </div>
    );
};

AvatarModal.propTypes = {
    onSetShowModal: PropTypes.func,
    childUpdateAvatarUrl: PropTypes.func,
};

export default AvatarModal;
