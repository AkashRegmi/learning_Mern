import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <>
      <button style={{color:"red"}} onClick={increase}>+</button>
      <p>Count:{count}</p>
      <button style={{color:"blue"}} onClick={decrease}>-</button>
    </>
  );
}

export default App;