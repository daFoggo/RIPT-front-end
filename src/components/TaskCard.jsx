import PropTypes from 'prop-types'
import OnGoingIcon from './icons/OnGoingIcon.jsx';
import OverdueIcon from './icons/OverdueIcon.jsx';
import FinishedIcon from './icons/FinishedIcon.jsx';
import { useTask } from '../context/TaskContext';

const TaskCard = ({ color, title, tasks }) => {
    const { setTaskType } = useTask();

    return (
        <div className={`shadow-sm hover:shadow-md hover:scale-[101%] duration-300 w-1/4 rounded-xl ${color} py-4 px-3 flex flex-col relative cursor-pointer`} onClick={() => setTaskType(title)}>
            {title === "Đang thực hiện" ? (
                <OnGoingIcon/>
            ) : title === "Đã hoàn thành" ? (
                <FinishedIcon />
            ) : title === "Quá hạn" ? (
                <OverdueIcon />
            ) : null}
            <div className="flex-grow flex flex-col justify-end ml-3">
                <h1 className='text-[#172754] font-bold text-5xl'>{tasks.length}</h1>
                <h1 className='text-[#172754] font-bold opacity-75'>{title}</h1>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 absolute bottom-3 right-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
        </div>
    )
}

TaskCard.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    tasks: PropTypes.array
}

export default TaskCard