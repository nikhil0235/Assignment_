// TaskFilter.js
import React from 'react';

const TaskFilter = ({ onFilter }) => {
  const handleFilter = (e) => {
    onFilter(e.target.value);
  };

  return (
    <div className="bg-white bg-opacity-10 p-4  rounded-lg shadow-md">
      <h3 className="text-xl text-white font-bold mb-2">Filter Tasks</h3>
      <select
        onChange={handleFilter}
        className="w-full px-3 py-2 text-white bg-white bg-opacity-10 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-300"
      >
        <option value="all" style={{color:'black'}}>All</option>
        <option value="completed" style={{color:'black'}}>Completed</option>
        <option value="pending" style={{color:'black'}}>Pending</option>
      </select>
    </div>
  );
};

export default TaskFilter;