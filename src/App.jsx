import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoContainer from "./components/TodoContainer";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContainer>
      <h1>Todo List</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} onRemoveTodo={removeTodo} />
    </TodoContainer>
  );
};

export default App;
