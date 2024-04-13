import PropTypes from "prop-types";

const TodoListItem = ({ id, title, onRemoveTodo }) => {
  const handleRemoveClick = () => {
    onRemoveTodo(id);
  };

  return (
    <li key={id}>
      {title}
      <button type="button" onClick={handleRemoveClick}>Remove</button>
    </li>
  );
};

TodoListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoListItem;
