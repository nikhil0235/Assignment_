// TaskForm.js

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('low');
  const [dueDate, setDueDate] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      navigate('/login')
    }  

    
  }, []);
  

  const generateUniqueId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  const saveTaskToMemory = (task) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: generateUniqueId(),
      title,
      description,
      priority,
      dueDate,
      completed: false,
    };
    saveTaskToMemory(newTask);
    setTitle('');
    setDescription('');
    setPriority('low');
    setDueDate('');
  };

  return (
    <div className=' bg-white rounded-lg bg-opacity-10 m-4'>  

    <form onSubmit={handleSubmit} className=" p-6 rounded-lg shadow-md">
      <div className="mb-4">
        
        <label htmlFor="title" className="block text-gray-300 font-bold mb-2">
          Task Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          required
          className="w-full px-3 py-2 bg-white bg-opacity-10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-300 font-bold mb-2">
          Task Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
          className="w-full px-3 py-2 bg-white bg-opacity-10 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-300"
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="priority" className="block text-gray-300 font-bold mb-2">
          Priority
        </label>
        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full px-3 py-2 bg-white bg-opacity-10 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-300"
        >
          <option value="low" style={{color:'black'}}>Low</option>
          <option value="medium" style={{color:'black'}}>Medium</option>
          <option value="high" style={{color:'black'}}>High</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="dueDate" className="block text-gray-300 font-bold mb-2">
          Due Date
        </label>
        <input
          type="date"
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full px-3 py-2 bg-white bg-opacity-10 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-300"
        />
      </div>
      <button
        type="submit"
        className="bg-cyan-300 text-black font-semibold px-4 py-2 rounded-md hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-300"
      >
        Add Task
      </button>
    </form>
    </div>
    
  );
};

export default TaskForm;