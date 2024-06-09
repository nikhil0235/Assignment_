// Task.js
import React from 'react';

const Task = ({ task, onUpdate, onDelete }) => {
  const handleComplete = () => {
    onUpdate({ ...task, completed: !task.completed });
  };

  const handleDelete = () => {
    onDelete(task.id);
  };


  return (
    <div className=" border p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h3 className={`text-xl font-bold ${task.completed ? 'text-green-400' : 'text-white'}`}>
          {task.title}
        </h3>
        <div>
          <span className={`px-2 py-1 rounded text-black font-bold text-xs  ${getPriorityColor(task.priority)}`}>
            {task.priority}
          </span>
        </div>
      </div>
      <p className="text-white mb-4">{task.description}</p>
      <div className="flex justify-between items-center">
        <p className=" text-white text-sm">Due: {task.dueDate}</p>
        <div className='flex '>
          <button
            onClick={handleComplete}
            className={ ` px-2 md:px-4 py-2 rounded-md font-semibold focus:outline-none ${
              task.completed ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-400 hover:bg-blue-500'
            }`}
          >
            {task.completed ? 'Completed' : 'Mark as Complete'}
          </button>
          <button
            onClick={handleDelete}
            className=" ml-1 md:ml-2 px-1 md:px-4 md:py-2  bg-red-500  text-white rounded-md hover:bg-red-600 focus:outline-none"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const getPriorityColor = (priority) => {
  switch (priority) {
    case 'high':
      return 'bg-red-500 text-white';
    case 'medium':
      return 'bg-yellow-500 text-white';
    case 'low':
      return 'bg-green-500 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
};

export default Task;