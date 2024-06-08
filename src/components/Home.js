// HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    <div className=" mt-2  flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className=" text-center text-3xl font-extrabold text-white">
          Task Management App
        </h2>
        <p className="mt-2 text-center text-sm text-gray-300">
          Stay organized and boost your productivity with our powerful task management app.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <h3 className="text-lg font-medium text-white">Features</h3>
          <ul className="mt-4 text-sm text-gray-300 list-disc list-inside">
            <li>Create and manage tasks with titles, descriptions, priorities, and due dates</li>
            <li>Search and filter tasks by status, priority, or title</li>
            <li>Mark tasks as complete or pending</li>
            <li>Edit and delete tasks as needed</li>
            <li>Assign categories or labels to tasks for better organization</li>
            <li>Track your task progress and productivity </li>
          </ul>
        </div>
      </div>
      </div>
   
  );
};

export default HomePage;