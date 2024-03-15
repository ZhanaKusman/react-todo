import PropTypes from "prop-types";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
};

export default TodoList;
