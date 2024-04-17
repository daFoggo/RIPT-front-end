import PropTypes from 'prop-types'
import AbsentIcon from './icons/AbsentIcon.jsx';
import LatelyIcon from './icons/LatelyIcon.jsx';
import EarlyIcon from './icons/EarlyIcon.jsx';
import { useForm } from '../context/FormContext';

const FormCard = ({ color, title, forms }) => {
    const { setFormType } = useForm();

    return(
        <div className={`shadow-sm hover:shadow-md hover:scale-[101%] duration-300 w-1/3 rounded-xl ${color} py-4 px-3 flex flex-col relative cursor-pointer`} onClick={() => {setFormType(title)}}>
        {title === "Đơn xin nghỉ" ? (
            <AbsentIcon></AbsentIcon>
        ) : title === "Đơn xin đến muộn" ? (
            <LatelyIcon></LatelyIcon>
        ) : title === "Đơn xin về sớm" ? (
            <EarlyIcon></EarlyIcon>
        ) : null}
        <div className="flex-grow flex flex-col justify-end ml-3">
            <h1 className='text-[#172754] font-bold text-5xl'>{forms.length}</h1>
            <h1 className='text-[#172754] font-bold opacity-75'>{title}</h1>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 absolute bottom-3 right-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
    </div>
    )
}

FormCard.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    forms: PropTypes.array
}

export default FormCard