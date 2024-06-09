// TaskList.js
import React, { useEffect, useRef, useState } from 'react';
import Task from './Task';
import TaskSearch from './TaskSearch';
import TaskFilter from './TaskFilter';
import { useNavigate } from 'react-router-dom';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const navigate = useNavigate();


  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      // Redirect to login page if user is not logged in
     navigate('/login')
    }  
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('tasks', JSON.stringify(tasks));
  // }, [tasks]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilter = (status) => {
    setFilterStatus(status);
  };

  const filteredTasks = tasks.filter((task) => {
    const searchMatch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
    const statusMatch = filterStatus === 'all' || task.completed === (filterStatus === 'completed');
    return searchMatch && statusMatch;
  });

  const handleTaskUpdate = (updatedTask) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    });
    setTasks(updatedTasks);
   
  };

  const handleTaskDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
   
  };

  return (
    <div className="bg-white bg-opacity-10 p-6 m-4 rounded-lg border-black-50 shadow-md">
      <h2 className="text-2xl text-white font-bold mb-4">Task List</h2>
      <div className="flex justify-between mb-4">
        <TaskSearch onSearch={handleSearch} />
        <TaskFilter onFilter={handleFilter} />
      </div>
      {filteredTasks.length === 0 ? (
        <p className="text-gray-400">No tasks found.</p>
      ) : (
        <ul>
          {filteredTasks.map((task) => (
            <li key={task.id} className="mb-4 ">
              <Task
                task={task}
                onUpdate={handleTaskUpdate}
                onDelete={handleTaskDelete}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
