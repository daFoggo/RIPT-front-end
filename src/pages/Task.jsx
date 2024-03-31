const Task = () => {
  return (
    <div>
      {/* Task cards */}
      <div className="taskCards flex justify-evenly">
        <div className="card">
          <div className="bg-gradient-to-tr from-sky-400 to-blue-600 rounded-xl flex flex-col p-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-16 h-16 bg-white rounded-xl bg-opacity-50">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
            </svg>
            <p className="text-xl font-semibold text-white">Công việc đang thực hiện</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Task