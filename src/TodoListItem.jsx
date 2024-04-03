import PropTypes from "prop-types";

const TodoListItem = ({ id, title }) => {
  return (
    <li key={id} style={{ margin: 0, padding: 0 }}>
      {title}
    </li>
  );
};

TodoListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default TodoListItem;
