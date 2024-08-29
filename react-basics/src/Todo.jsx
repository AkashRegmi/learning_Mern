import { useState } from "react";
import "./App.css";

import { Todoform } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
function Todo() {
  const [indexToBeEdited, setIndexToBeEdited] = useState(null);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(["learn html", "learn css", "learn php"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (indexToBeEdited === null) {
      setTodos([...todos, e.target[0].value]);
    } else {
      todos[indexToBeEdited] = todo;
      setTodos([...todos]);

      setIndexToBeEdited(null);
    }
    setTodo("");
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  const handleEdit = (index) => {
    setIndexToBeEdited(index);
    setTodo(todos[index]);
  };

  return (
    <>
    <Todoform handleSubmit={handleSubmit}
    todo={todo}
    setTodo={setTodo}
    indexToBeEdited={indexToBeEdited}
  />
  <h2>Pada hai pada yo course</h2>
  <TodoList 
  todos={todos}
  handleDelete={handleDelete}
  handleEdit={handleEdit}
   />
    </>
  );
}

export default Todo;
