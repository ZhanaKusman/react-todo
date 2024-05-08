import PropTypes from "prop-types";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todoList, onRemoveTodo }) => {
  return (
    <ul>
      {todoList.map(({ id, title }) => {
        if (!title) {
          return null; // Skip rendering if title is missing or undefined
        }
        return (
          <TodoListItem
            key={id}
            id={id}
            title={title}
            onRemoveTodo={onRemoveTodo}
          />
        );
      })}
    </ul>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoList;
