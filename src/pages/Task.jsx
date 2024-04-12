import { useState } from "react";
import { useTask } from "../context/TaskContext";
import TaskModal from "../components/TaskModal";
import TaskCard from "../components/TaskCard";
import TaskListNavBar from "../layouts/TaskListNavBar";

const Task = () => {
  const { taskType } = useTask();
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [taskKey, setTaskKey] = useState();

  function handleSetShowTaskModal(index) {
    setTaskKey(index);
    setShowTaskModal((s) => !s);
  }

  const onGoingTasks = [
    {
      Ma_cong_viec: 1,
      Ten_cong_viec: "Design a new landing page",
      Mo_ta:
        "Design a new landing page for the website, it should be modern and trendy",
      Thoi_han: "2024-04-07",
      Trang_thai: "Đang thực hiện",
      Ma_nguoi_giao: "XXX",
      Ma_nguoi_thuc_hien: "YYY",
    },
    {
      Ma_cong_viec: 2,
      Ten_cong_viec: "Design a new navigation bar",
      Mo_ta:
        "Design a new navigation bar for the website, it should be modern and trendy",
      Thoi_han: "2024-04-10",
      Trang_thai: "Đang thực hiện",
      Ma_nguoi_giao: "XXX",
      Ma_nguoi_thuc_hien: "YYY",
    },
    {
      Ma_cong_viec: 3,
      Ten_cong_viec: "Design a new footer",
      Mo_ta:
        "Design a new footer for the website, it should be modern and trendy",
      Thoi_han: "2024-04-23",
      Trang_thai: "Đang thực hiện",
      Ma_nguoi_giao: "XXX",
      Ma_nguoi_thuc_hien: "YYY",
    },
  ];
  const finishedTasks = [];
  const overdueTasks = [];

  return (
    <div className="flex flex-col gap-3">
      <div className="taskCards bg-[#eff7ff] h-[30dvh] rounded-xl p-4 flex gap-20 justify-between">
        <TaskCard
          color="bg-gradient-to-tr from-blue-400 to-sky-100"
          title="Đang thực hiện"
          tasks={onGoingTasks}
        ></TaskCard>
        <TaskCard
          color="bg-gradient-to-tr from-indigo-50 to-blue-200"
          title="Đã hoàn thành"
          tasks={finishedTasks}
        ></TaskCard>
        <TaskCard
          color="bg-gradient-to-tr from-slate-200 to-slate-400"
          title="Quá hạn"
          tasks={overdueTasks}
        ></TaskCard>
      </div>
      <div className="taskList bg-[#eff7ff] h-dvh rounded-xl p-4 ">
        <TaskListNavBar></TaskListNavBar>

        {taskType === "Đang thực hiện" &&
          onGoingTasks.map((task, index) => (
            <div
              key={index}
              className="my-6 p-3 bg-[#bfd6fd] rounded-r-xl rounded-l-sm border-l-[5px] border-[#172754] flex flex-col cursor-pointer relative shadow-sm"
              onClick={() =>handleSetShowTaskModal(index)}
            >
              <h1 className="font-bold">{task.Ten_cong_viec}</h1>
              <div className="flex mt-3">
                <p className="text-sm font-semibold">#{task.Ma_cong_viec}</p>
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
                  {task.Thoi_han}
                  {task.Thoi_han}
                </p>
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
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  {task.Ma_nguoi_giao}
                </p>
              </div>
            </div>
          ))}

        {taskType === "Đã hoàn thành" && <h1>ghi</h1>}
        {taskType === "Quá hạn" && <h1>def</h1>}

      </div>
      {showTaskModal && (
        <TaskModal
          onSetShowModal={handleSetShowTaskModal}
          taskData={
            taskType === "Đang thực hiện"
              ? onGoingTasks[taskKey]
              : taskType === "Đã hoàn thành"
                ? finishedTasks[taskKey]
                : taskType === "Sắp tới" ?
                  overdueTasks[taskKey] : null
          }
        ></TaskModal>
      )}
    </div >
  );
};

export default Task
