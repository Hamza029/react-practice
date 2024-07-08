import React, { useContext } from "react";
import UserContext from "./../contexts/UserContext";

function User() {
  const { currentUser, toggleUser } = useContext(UserContext);

  console.log(currentUser);

  return (
    <div className="text-center">
      <div className="text-2xl my-2">
        {currentUser ? `Welcome ${currentUser.name}` : "Please log in"}
      </div>

      <div>
        <button
          className="p-2 bg-yellow-500 rounded-md"
          onClick={(e) => toggleUser()}
        >
          {currentUser ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
}

export default User;

