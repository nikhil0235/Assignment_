// App.js
import React from 'react';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import { Route, Routes } from 'react-router-dom';
import TaskForm from './components/TaskForm';
import Login from './components/Login';
import Register from './components/Register';
import img from './image/black.jpg'
import Home from './components/Home'
import Footer from './components/Footer';

const App = () => {
  
  return (
  <> 
  <Navbar/>
    <div  >
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/taskform" element={<TaskForm />} />
          <Route path="/tasks" element={<TaskList />} />
        </Routes>
      </div>
    </div>
    <Footer/>
      
  </>
  
  );
};

export default App;
