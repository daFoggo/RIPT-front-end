import { useForm } from "../context/FormContext";

const FormListNavBar = () => {
    const { formType } = useForm();
    const handleSetFormType = useForm().handleSetFormType;

    return (
        <div className="flex gap-5 border-b-2">
            <h1 className={`font-semibold cursor-pointer ${formType === "Tạo đơn" ? 'border-b-2 border-b-[#172754]' : ''}`} onClick={handleSetFormType}>Tạo đơn</h1>
            <h1 className={`font-semibold cursor-pointer ${formType === "Đơn xin nghỉ" ? 'border-b-2 border-b-[#172754]' : ''}`} onClick={handleSetFormType}>Đơn xin nghỉ</h1>
            <h1 className={`font-semibold cursor-pointer ${formType === "Đơn xin đến muộn" ? 'border-b-2 border-b-[#172754]' : ''}`} onClick={handleSetFormType}>Đơn xin đến muộn</h1>
            <h1 className={`font-semibold cursor-pointer ${formType === "Đơn xin về sớm" ? 'border-b-2 border-b-[#172754]' : ''}`} onClick={handleSetFormType}>Đơn xin về sớm</h1>
            <h1 className={`font-semibold cursor-pointer ${formType === "Khác" ? 'border-b-2 border-b-[#172754]' : ''}`} onClick={handleSetFormType}>Khác</h1>
        </div>
    );
};

export default FormListNavBar;
    