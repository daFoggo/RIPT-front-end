import { useState } from "react";
import { useForm } from "../context/FormContext";
import FormCard from "../components/FormCard";
import FormListNavBar from "../layouts/FormListNavBar";

const CreateForm = () => {
    const { formType } = useForm();
    const [formKey, setFormKey] = useState();

    function handleSetShowFormModal(index) {
        setFormKey(index);
    }

    const absentForms = [
        {
            Ma_don: 1,
            Ma_nguoi_dung: "XXX",
            Ma_loai_don: "Xin nghỉ",
            Ngay_tao: "2024-04-07",
            Ly_do: "I'm sick",
            Trang_thai: "Đang chờ",
            Nguoi_duyet: "YYY",
        },
        {
            Ma_don: 2,
            Ma_nguoi_dung: "XXX",
            Ma_loai_don: "Xin nghỉ",
            Ngay_tao: "2024-04-10",
            Ly_do: "I'm sick",
            Trang_thai: "Đang chờ",
            Nguoi_duyet: "YYY",
        },
        {
            Ma_don: 3,
            Ma_nguoi_dung: "XXX",
            Ma_loai_don: "Xin nghỉ",
            Ngay_tao: "2024-04-23",
            Ly_do: "I'm sick",
            Trang_thai: "Đang chờ",
            Nguoi_duyet: "YYY",
        },
    ]

    const latelyForms = []
    const earlyForms = []
    const otherForms = []

    return (
        <div className="flex flex-col gap-3">
            <div className="formCards bg-[#eff7ff] h-[30dvh] rounded-xl p-4 flex gap-20 justify-between">
                <FormCard
                    color="bg-gradient-to-tr from-blue-400 to-sky-100"
                    title="Đơn xin nghỉ"
                    forms={absentForms}
                ></FormCard>
                <FormCard
                    color="bg-gradient-to-tr from-indigo-50 to-blue-200"
                    title="Đơn xin đến muộn"
                    forms={latelyForms}
                ></FormCard>
                <FormCard
                    color="bg-gradient-to-tr from-slate-200 to-slate-400"
                    title="Đơn xin về sớm"
                    forms={earlyForms}
                ></FormCard>
            </div>

            <div className="formList bg-[#eff7ff] h-dvh rounded-xl p-4 ">
                <FormListNavBar></FormListNavBar>

                {formType === "Đơn xin nghỉ" &&
                    absentForms.map((form, index) => (
                        <div
                            key={index}
                            className="my-6 p-3 bg-[#bfd6fd] rounded-r-xl rounded-l-sm border-l-[5px] border-[#172754] flex flex-col cursor-pointer relative shadow-sm"
                            onClick={() => handleSetShowFormModal(index)}
                        >
                            <h1 className="font-bold">{form.Ma_loai_don}</h1>
                            <div className="flex mt-3">
                                <p className="text-sm font-semibold">#{form.Ma_don}</p>
                                <p className="text-sm font-semibold opacity-75 ml-3 flex justify-center items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 mr-1"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                        />
                                    </svg>
                                    {form.Ngay_tao}
                                </p>
                                <p className="text-sm font-semibold opacity-75 ml-3 flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                                    </svg>

                                    {form.Trang_thai}
                                </p>
                            </div>
                        </div>
                    ))}

                {formType === "Đơn xin đến muộn" && <h1>ghi</h1>}
                {formType === "Đơn xin về sớm" && <h1>def</h1>}
                {formType === "Khác" && <h1>def</h1>}
            </div>
        </div>
    )
}

export default CreateForm