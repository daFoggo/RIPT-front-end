import PropTypes from "prop-types";
import { toast } from "sonner";

const ModifyPasswordModal = (props) => {
  return (
    <div className="flex justify-center items-center h-screen overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="flex flex-col w-1/3 bg-white p-5 rounded-md">
        <div className="header flex justify-between pb-3 border-b-2">
          <h1 className="font-semibold">Cập nhật thông tin tài khoản</h1>
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
        <div className="mt-3 flex flex-col border-b-2 pb-3 gap-5">
          <div className="flex items-center justify-between">
            <label className="font-semibold mr-3">Mật khẩu cũ :</label>
            <input
              className="w-1/2 bg-slate-100 rounded-md p-1"
              type="password"
              placeholder="Nhập mật khẩu cũ"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="font-semibold mr-3">Mật khẩu mới :</label>
            <input
              className="w-1/2 bg-slate-100 rounded-md p-1"
              type="password"
              placeholder="Nhập mật khẩu mới"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="font-semibold mr-3">Xác nhận mật khẩu :</label>
            <input
              className="w-1/2 bg-slate-100 rounded-md p-1"
              type="password"
              placeholder="Nhập lại mật khẩu mới"
            />
          </div>
        </div>
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
              toast.success("Đã cập nhật mật khẩu");
            }}
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
};

ModifyPasswordModal.propTypes = {
  onSetShowModal: PropTypes.func,
};
export default ModifyPasswordModal;
