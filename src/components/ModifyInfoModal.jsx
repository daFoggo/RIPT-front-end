import PropTypes from "prop-types";
import { toast } from "sonner";

const Modal = (props) => {
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
            <label className="font-semibold mr-3">Ngày sinh :</label>
            <input className="w-2/3 bg-slate-100 rounded-md p-1" type="date" />
          </div>
          <div className="flex items-center justify-between">
            <label className="font-semibold mr-3">Giới tính :</label>
            <select name="" id="" className="w-2/3 bg-slate-100 rounded-md p-1">
              <option value="">Chọn giới tính</option>
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
              <option value="other">Khác</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <label className="font-semibold mr-3">Email :</label>
            <input
              className="w-2/3 bg-slate-100 rounded-md p-1"
              type="email"
              placeholder="Nhập email"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="font-semibold mr-3">Số điện thoại :</label>
            <input
              className="w-2/3 bg-slate-100 rounded-md p-1"
              type="tel"
              placeholder="Nhập số điện thoại"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="font-semibold mr-3">Địa chỉ :</label>
            <input
              className="w-2/3 bg-slate-100 rounded-md p-1"
              type="text"
              placeholder="Nhập địa chỉ"
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
              toast.success("Cập nhật thông tin thành công");
            }}
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onSetShowModal: PropTypes.func,
};
export default Modal;
