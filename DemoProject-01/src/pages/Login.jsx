import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { currentUser, login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      setError(null);
    } catch (err) {
      const errorMessage = err.response.data.message.split(": ")[1];
      setError(errorMessage);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col pt-20">
      <h1 className="text-5xl text-green-900 font-bold mb-7">Login</h1>
      <form className="flex flex-col p-12 bg-white rounded-xl w-72 md:w-[25rem] gap-7 shadow-xl">
        <input
          className="p-2 border-b-2 border-green-400 focus:outline-none focus:border-green-800"
          onChange={handleChange}
          name="Username"
          type="text"
          placeholder="Username"
        />
        <input
          className="p-2 border-b-2 border-green-400 focus:outline-none focus:border-green-800"
          onChange={handleChange}
          name="Password"
          type="text"
          placeholder="Password"
        />
        <button
          className="bg-green-400 p-2 rounded-md text-green-900 font-bold hover:bg-green-500 duration-200"
          onClick={handleSubmit}
        >
          Login
        </button>
        {error && <p className="text-red-700 text-center">{error}</p>}
        <span className="text-green-900 text-center">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="underline hover:text-yellow-700 duration-200"
          >
            Signup
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;

