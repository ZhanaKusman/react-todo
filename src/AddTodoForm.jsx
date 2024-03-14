import PropTypes from "prop-types";
import { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (!todoTitle.trim()) {
      return;
    }
    addTodo(todoTitle);
    setTodoTitle("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        name="title" // Added name attribute
        value={todoTitle}
        onChange={(event) => setTodoTitle(event.target.value)}
        placeholder="Enter todo title"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

AddTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
