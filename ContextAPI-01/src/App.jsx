import React, { useState } from "react";
import User from "./components/User";
import UserContextProvider from "./contexts/UserContextProvider";

export const UserContext = React.createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const toggleUser = () => {
    if (currentUser) {
      setCurrentUser(null);
    } else {
      setCurrentUser({ name: "Hamza", age: 24 });
    }
  };

  return (
    <>
      {/* <UserContext.Provider value={{ currentUser, toggleUser }}>
        <User />
      </UserContext.Provider> */}
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </>
  );
}

export default App;

