import { useState } from "react";
import "./App.css";
function App() {
  const [todos, setToDos] = useState(["learn html", "learn css", "learn phhp"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    setToDos([...todos, e.target[0].value]);
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="add to do " required />
        <input type="submit" value="add todo" />
      </form>
      <h2>Pada hai pada yo course </h2>
      <ui>
        {todos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ui>
    </>
  );
}

export default App;
