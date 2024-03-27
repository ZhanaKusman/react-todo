import PropTypes from "prop-types";
import { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (!todoTitle.trim()) {
      return;
    }
    addTodo({
      title: todoTitle,
      id: Date.now(),
    });
    setTodoTitle("");
  };

  const handleTitleChange = (event) => {
    setTodoTitle(event.target.value);
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
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
