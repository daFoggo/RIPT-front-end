import { useForm } from "../context/FormContext";

const FormListNavBar = () => {
    const { formType } = useForm();
    const handleSetFormType = useForm().handleSetFormType;

    return (
        <div className="flex justify-between border-b-2">
            <div className="flex gap-5">
                <h1 className={`font-semibold cursor-pointer ${formType === "Đơn xin nghỉ" ? 'border-b-2 border-b-[#172754]' : ''}`} onClick={handleSetFormType}>Đơn xin nghỉ</h1>
                <h1 className={`font-semibold cursor-pointer ${formType === "Đơn xin đến muộn" ? 'border-b-2 border-b-[#172754]' : ''}`} onClick={handleSetFormType}>Đơn xin đến muộn</h1>
                <h1 className={`font-semibold cursor-pointer ${formType === "Đơn xin về sớm" ? 'border-b-2 border-b-[#172754]' : ''}`} onClick={handleSetFormType}>Đơn xin về sớm</h1>
                <h1 className={`font-semibold cursor-pointer ${formType === "Khác" ? 'border-b-2 border-b-[#172754]' : ''}`} onClick={handleSetFormType}>Khác</h1>
            </div>
            <div className="hover:scale-[1.05] duration-300 pb-2">
                <button className="bg-[#21387a] text-white py-1 px-3 rounded hover:bg-[#2c4383]">Tạo đơn</button>
            </div>
        </div>
    );
};

export default FormListNavBar;
