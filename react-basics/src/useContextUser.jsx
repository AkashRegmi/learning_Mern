import React, { useState, createContext, useContext } from "react";
import Counter from "./counter";

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({
    name: "Akash",
    isAdmin: false,
  });
  const makeAdmin = () => {
    setUser({ ...user, isAdmin: true });
  };
  const valueToSend = {
    user,
    makeAdmin,
  };
  return (
    <>
      <userContext.Provider value={valueToSend}>
        <Counter />
      </userContext.Provider>
    </>
  );
}

export default App;
