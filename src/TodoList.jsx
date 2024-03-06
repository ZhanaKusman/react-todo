const TodoList = () => {
  const todoList = [
    { id: 1, title: "Complete assignment 1" },
    { id: 2, title: "Study for exam" },
    { id: 3, title: "Write report" },
    { id: 4, title: "Submit assignment" },
  ];

  return (
    <ul>
      {todoList.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
