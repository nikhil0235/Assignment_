import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate, Link } from "react-router-dom";
import { SiGnuprivacyguard } from "react-icons/si";
import { doc, setDoc } from "firebase/firestore"; 


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password === repassword) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/tasksform");
      } catch (error) {
        setError(error.message);
      }
    } else {
      setError("Passwords do not match");
    }
  };

  return (
    <div className="container mx-auto flex items-center justify-center h-screen -translate-y-10">
      <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex flex-row items-center justify-center -translate-y-3">
          <div className="flex justify-center mb-4">
            <SiGnuprivacyguard size={60} className="text-orange-500" />
          </div>
          <h2 className="text-4xl text-white font-bold mb-6 m-2 text-center">
            Register
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 text-white">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-white bg-opacity-10 rounded border appearance-none border-white-600 px-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-white bg-opacity-10 rounded border appearance-none border-white-600 px-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base"
          />
          <input
            type="password"
            placeholder="Re-enter the password"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
            className="w-full p-3 bg-white bg-opacity-10 rounded border appearance-none border-white-600 px-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base"
          />
          <button
            type="submit"
            className="w-full py-3 font-semibold text-center bg-blue-400 text-white rounded hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>
          {error && (
            <span className="text-white font-semibold">{error}</span>
          )}
        </form>
        <p className="mt-4 font-semibold text-center">
          Do you have an account?{" "}
          <Link to="/login" className="text-white hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;