// src/components/UserProfile.js
import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import { BiLogOut, BiLogInCircle } from "react-icons/bi";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { FaUserAstronaut } from "react-icons/fa6";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUser(user);
        localStorage.setItem('user',user)
        
      } else {
        // No user is signed in
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="flex w-60 absolute right-20  -top-10 translate-x-12">
      {user ? (
        <div className="flex items-center space-x-2 font-bold text-white">
         <FaUserAstronaut className="ml-2 text-xl text-white md:text-3xl" />
          <p>{user.displayName}</p>
          <button
            onClick={() => signOut(auth)}
            className="inline-flex text-xl font-semibold text-white bg-orange-500 border-0 m-2 py-1 px-4 focus:outline-none hover:bg-orange-600 rounded"
          >
            Logout <BiLogOut className="ml-2 -mr-1 text-xl text-white md:text-3xl" />
          </button>
        </div>
      ) : (
        <div className="flex flex-row items-center m-2 font-bold text-white space-y-2 -translate-y-4">
  <div className="py-2  rounded">
    No user
  </div>
  <div className=" p-2 rounded">
    <Link to={"/login"}>
      <button className="inline-flex items-center text-xl text-white bg-green-500 border-0 mx-2 py-1 px-4 focus:outline-none hover:bg-green-600 rounded">
        Login <BiLogInCircle className="ml-2 text-xl text-white md:text-3xl" />
      </button>
    </Link>
  </div>
 </div>
      )}
    </div>
  );
};

export default UserProfile;
