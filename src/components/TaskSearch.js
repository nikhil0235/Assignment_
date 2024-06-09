// TaskSearch.js
import React, { useState } from 'react';

const TaskSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className=" m-2 p-6  border rounded-lg shadow-md">
      <h3 className="text-xl text-white font-bold mb-4">Search Tasks</h3>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search tasks by title"
        className="w-full px-3 py-2 text-gray-300 bg-white bg-opacity-10 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-300"
      />
    </div>
  );
};

export default TaskSearch;