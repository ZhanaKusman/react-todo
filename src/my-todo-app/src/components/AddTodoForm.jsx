import { useState } from "react";
import PropTypes from "prop-types"; 

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
      <label htmlFor="todo-title">Title</label> {}
      <input
        id="todo-title"
        type="text"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
        placeholder="Enter todo title"
      />
      <button type="submit">Add</button> {}
    </form>
  );
};

AddTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired, 
};

export default AddTodoForm;
