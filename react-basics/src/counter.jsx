import { useEffect, useState } from "react";

import "./App.css";

function Counter() {
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
      <button style={{ color: "red" }} onClick={increase}>
        +
      </button>
      <p>Count:{count}</p>
      <button style={{ color: "blue" }} onClick={decrease}>
        -
      </button>
    </>
  );
}

export default Counter;
