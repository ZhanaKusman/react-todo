import PropTypes from "prop-types";

const TodoListItem = ({ todo }) => {
  return <li>{todo.title}</li>;
};

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default TodoListItem;
