import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const TaskContext = createContext();

export const useTask = () => {
    return useContext(TaskContext);
}

export const TaskProvider = ({ children }) => {
    const [taskType, setTaskType] = useState("Đang thực hiện");

    function handleSetTaskType(event) {
        setTaskType(event.target.textContent);
    }

    return (
        <TaskContext.Provider value={{ taskType, setTaskType, handleSetTaskType }}>
            {children}
        </TaskContext.Provider>
    );
}

TaskProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
