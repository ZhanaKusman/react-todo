import PropTypes from "prop-types";

const TodoContainer = ({ children }) => {
  return <div className="todo-container">{children}</div>;
};

TodoContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TodoContainer;
