import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const toggleUser = () => {
    if (currentUser) {
      setCurrentUser(null);
    } else {
      setCurrentUser({ name: "Hamza", age: 24 });
    }
  };

  return (
    <UserContext.Provider value={{ currentUser, toggleUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

