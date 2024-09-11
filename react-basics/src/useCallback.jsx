/* eslint-disable react/display-name */
import React, { useCallback, useState } from "react";
import "./App.css";

const Input = React.memo(({ value, handleChange }) => {
  console.log("Called from the input component");
  return <input type="text" value={value} onChange={handleChange} />;
});

const DisplayInputValue = React.memo(({ value }) => {
  console.log("Display Input Value Called.");
  return <p>Value: {value}</p>;
});

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState();
  const handleAdd = () => setCount(count + 1);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <>
      <button onClick={handleAdd}>add + </button>
      <p>Count: {count}</p>
      <Input value={value} handleChange={handleChange} />
      <DisplayInputValue value={value} />
    </>
  );
}

export default App;
