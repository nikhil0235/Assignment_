// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './user-profile';

const Navbar = () => {
 
  return (
    <> 
    <nav className=" bg-white rounded-lg m-4   bg-opacity-10 py-4 border">
      <div className="container mx-auto md:px-4">
        <ul className="flex md:space-x-4 -space-x-2">
        <li>
            <Link
              to="/"
              className="text-white hover:text-cyan-300 hover:underline px-3 py-2 rounded-md text-sm font-medium"
              >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/taskform"
              className="text-white hover:text-cyan-300 hover:underline px-3 py-2 rounded-md text-sm font-medium"
              >
              Add Task
            </Link>
          </li>
          <li>
           
          </li>
          <li>
            <Link
              to="/tasks"
              className="text-white hover:text-cyan-300 hover:underline px-3 py-2 rounded-md text-sm font-medium"
              >
             View Tasks
            </Link>
          </li>
        </ul>
      </div>
      <div className='absolute right-0'>
         
    <UserProfile/>
      </div>
    </nav>

          </>


  );
};

export default Navbar;