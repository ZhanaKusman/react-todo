import "./App.css"; 
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const App = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm />{" "}
      {/* This line ensures that the AddTodoForm component is being used */}
      <TodoList />
    </div>
  );
};

export default App;
