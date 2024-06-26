import React, { useState, createContext } from "react";

import Todos from "./components/Todos"; // Lalukan Import
import TodoForm from "./components/TodoForm";

import "./App.css";

export const TodoContext = createContext()

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Finish Progate React Course",
      completed: false,
    },
    {
      id: 2,
      title: "Have lunch with Guru Domba",
      completed: false,
    },
    {
      id: 3,
      title: "Study React with Ninja Ken",
      completed: false,
    },
  ]);
  console.log(todos);

  // Definisikan toggleCompleted di sini
  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // Function DeleteTodo
  const deleteTodo = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((_, index) => index !== todoId));
  };

  // Definisikan function addTodo
  const addTodo = (todoTitle) => {
    if (todoTitle === "") {
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    };

    const updatedTodos = todos.concat(newTodo);
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider value={{ toggleCompleted, deleteTodo }} >
      <div className="app-container">
        <h1>My Todo List</h1>
        {/* Teruskan function toggleCompleted ke component Todos */}
        <TodoForm addTodo={addTodo} />
        <Todos
          todos={todos}
          // toggleCompleted={toggleCompleted}
          // deleteTodo={deleteTodo}
        />
      </div>
    </TodoContext.Provider>
  );
};

// const styles = {
//   container: {
//     width: "100%",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     textAlign: "center",
//     padding: "12px",
//   },
//   title: {
//     fontSize: "36px",
//   },
// };

export default App;
