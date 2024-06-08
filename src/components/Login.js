import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';
import { BiLogIn } from 'react-icons/bi';
const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      
      navigate("/");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="container mx-auto flex items-center justify-center translate-y-20">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md bg-opacity-10">
      <div className='flex flex-row items-center justify-center -translate-x-2 -translate-y-3'> 
      <div className="flex justify-center mb-4">
          <BiLogIn size={60} className="text-green-500" />
        </div>
        <h2 className="text-4xl text-white font-bold mb-6 m text-center">Login</h2> </div>
        <form onSubmit={handleSubmit} className="space-y-4 text-gray-100">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-white bg-opacity-10 rounded border appearance-none border-white-600 px-2 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:border-cyan-300  "
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 bg-white bg-opacity-10 rounded border appearance-none border-white-600 px-2 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:border-cyan-300"
          />
          <button
            type="submit"
            className="w-full py-3 font-semibold text-center bg-blue-400 text-white rounded hover:bg-blue-600 transition duration-200"
          >
            Sign in
          </button>
          {error && <span className="white " >Something Went Wrong</span>}
        </form>
        <p className="mt-4 font-semibold text-center">
          You don't have an account? <Link to="/register" className="text-white hover:underline">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
