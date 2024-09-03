import { useEffect, useState } from "react";
import "./App.css";

import { Todoform } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
function Todo() {
  const [indexToBeEdited, setIndexToBeEdited] = useState(null);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(()=>{
    return JSON.parse (localStorage.getItem("todos")) ?? [];
  });

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedTodos;
    if (indexToBeEdited === null) {
      updatedTodos = [...todos, todo];
    } else {
      todos[indexToBeEdited] = todo;
      updatedTodos=[...todos];

      setIndexToBeEdited(null);
    }
    setTodo("");
    setTodos(updatedTodos);
    // localStorage.setItem("todos", JSON.stringify(updatedTodos));
   
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
    // localStorage.setItem("todos", JSON.stringify(newTodos));
  };//to delete the todolist

  const handleEdit = (index) => {
    setIndexToBeEdited(index);
    setTodo(todos[index]);
  };

  return (
    <>
      <Todoform
        handleSubmit={handleSubmit}
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
