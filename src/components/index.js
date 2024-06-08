// index.js
import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TaskSearch from './TaskSearch';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-white font-bold mb-8">Task Management index</h1>
      <TaskForm />
      <TaskSearch onSearch={handleSearch} />
      <TaskList searchTerm={searchTerm} />
    </div>
  );
};

export default Index;