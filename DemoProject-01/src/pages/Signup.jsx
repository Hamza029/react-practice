import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex justify-center items-center flex-col pt-20">
      <h1 className="text-5xl text-green-900 font-bold mb-7">Signup</h1>
      <form className="flex flex-col p-12 bg-white rounded-xl w-72 md:w-[25rem] gap-7 shadow-xl">
        <input
          className="p-2 border-b-2 border-green-400 focus:outline-none focus:border-green-800"
          type="text"
          placeholder="Name"
        />
        <input
          className="p-2 border-b-2 border-green-400 focus:outline-none focus:border-green-800"
          type="text"
          placeholder="Username"
        />
        <input
          className="p-2 border-b-2 border-green-400 focus:outline-none focus:border-green-800"
          type="text"
          placeholder="Email"
        />
        <input
          className="p-2 border-b-2 border-green-400 focus:outline-none focus:border-green-800"
          type="text"
          placeholder="Password"
        />
        <button className="bg-green-400 p-2 rounded-md text-green-900 font-bold hover:bg-green-500 duration-200">
          Signup
        </button>
        <p className="text-red-700 text-center">There is an error!</p>
        <span className="text-green-900 text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="underline hover:text-yellow-700 duration-200"
          >
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Signup;

