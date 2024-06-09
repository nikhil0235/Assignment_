import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import { Route, Routes, useLocation } from 'react-router-dom';
import TaskForm from './components/TaskForm';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Footer from './components/Footer';
import LoadingBar from 'react-top-loading-bar';


const App = () => {
  const [progress, setProgress] = useState(0)
  const [prevLoc, setPrevLoc] = useState("")
  const location = useLocation()

  useEffect(() => {
    setPrevLoc(location.pathname)
    setProgress(100)
    if(location.pathname===prevLoc){
        setPrevLoc('')
    }
 }, [location])

 useEffect(() => {
    setProgress(0)
 }, [prevLoc])

  

  return (
    <>
      <LoadingBar
        color="cyan"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div > 
      <Navbar />
      <div>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/taskform" element={<TaskForm />} />
            <Route path="/tasks" element={<TaskList />} />
          </Routes>
      </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default App;