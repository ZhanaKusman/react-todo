import "./App.css";
import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        },
      };

      const url = `https://api.airtable.com/v0/${
        import.meta.env.VITE_AIRTABLE_BASE_ID
      }/${import.meta.env.VITE_TABLE_NAME}`;

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        const todos = data.records.map((record) => ({
          title: record.fields.title,
          id: record.id,
        }));

        setTodoList(todos);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const removeTodo = (idToRemove) => {
    setTodoList(todoList.filter((todo) => todo.id !== idToRemove));
  };

  return [todoList, setTodoList, removeTodo, isLoading];
};

const App = () => {
  const [todoList, setTodoList, removeTodo, isLoading] =
    useSemiPersistentState();

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
           
            <>
              <h1>Todo List</h1>
              <AddTodoForm addTodo={addTodo} />
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
              )}
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
