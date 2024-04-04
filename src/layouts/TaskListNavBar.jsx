import { useTask } from '../context/TaskContext';

const TaskListNavBar = () => {
    const { taskType } = useTask();
    const handleSetTaskType = useTask().handleSetTaskType;

    return (
        <div className="flex gap-5 border-b-2">
            <h1 className={`font-semibold cursor-pointer ${taskType === "Đang thực hiện" ? 'border-b-2 border-b-[#172754]' : ''}`} onClick={handleSetTaskType}>Đang thực hiện</h1>
            <h1 className={`font-semibold cursor-pointer ${taskType === "Đã hoàn thành" ? 'border-b-2 border-b-[#172754]' : ''}`} onClick={handleSetTaskType}>Đã hoàn thành</h1>
            <h1 className={`font-semibold cursor-pointer ${taskType === "Quá hạn" ? 'border-b-2 border-b-[#172754]' : ''}`} onClick={handleSetTaskType}>Quá hạn</h1>
        </div>
    );
};

export default TaskListNavBar;
