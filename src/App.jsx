import "./App.css";
import { useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Complete assignment 1" },
    { id: 2, title: "Study for exam" },
    { id: 3, title: "Write report" },
    { id: 4, title: "Submit assignment" },
  ]);

  const addTodo = (newTodoTitle) => {
    const newTodo = {
      id: todoList.length + 1,
      title: newTodoTitle,
    };
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
};

export default App;
