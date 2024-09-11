import { useRef } from "react";

function App() {
  const inputNameRef= useRef();

  return <>
  <label htmlFor="name">Name:</label>
  <input type="text" />
  </>;
}
