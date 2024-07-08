import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0">
      <div className="px-5 flex items-center justify-between bg-green-300 text-green-950">
        <div className="h-12 font-bold text-xl flex justify-center items-center">
          AlgoDaily
        </div>
        <div className="flex items-center font-medium justify-center">
          <Link
            className="p-2 rounded-md hover:bg-green-400"
            to="/?author=Hamza"
          >
            MyBlogs
          </Link>
          <Link className="p-2 cursor-pointer rounded-md hover:bg-green-400">
            Hamza
          </Link>
          <Link className="p-2 cursor-pointer rounded-md hover:bg-green-400">
            Logout
          </Link>
          <Link className="p-2 rounded-md hover:bg-green-400" to="/create-blog">
            Create
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

