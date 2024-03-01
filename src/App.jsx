const App = () => {
  const todoList = [
    { id: 1, title: "Complete assignment 1" },
    { id: 2, title: "Study for exam" },
    { id: 3, title: "Write report" },
  ];
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
