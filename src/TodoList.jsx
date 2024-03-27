import PropTypes from "prop-types";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map(
        (
          { id, title }
        ) => (
          <TodoListItem key={id} id={id} title={title} /> 
        )
      )}
    </ul>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
};

export default TodoList;
