import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

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
      <label htmlFor="todo-title">Title</label>{" "}
      {/* Update label text to "Title" */}
      <input
        id="todo-title"
        type="text"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
        placeholder="Enter todo title"
      />
      <button type="submit">Add</button> {/* Update button text to "Add" */}
    </form>
  );
};

AddTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired, // Include addTodo in propTypes validation
};

export default AddTodoForm;
