import PropTypes from "prop-types";

const TodoListItem = ({ id, title }) => {
  return <li key={id}>{title}</li>;
};

TodoListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default TodoListItem;
