import { createContext, useContext, useEffect, useState } from "react";

import "./App.css";
import { userContext } from "./App";



function Counter() {
  const { user, makeAdmin } = useContext(userContext);
  useEffect(() => {
    console.log("From use State");
  },[]);
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <>
      <button disabled ={!user.isAdmin}style={{ color: "red" }} onClick={increase}>
        +
      </button>
      <p>Count:{count}</p>
      <button style={{ color: "blue" }} onClick={decrease}>
        -
      </button>
      <br/>
      <button
      onClick={() => {
        makeAdmin();
      }}
    >
      Make Admin
    </button>
    </>
  );
}

export default Counter;
