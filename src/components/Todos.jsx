import React from "react";
import TodoItem from "./TodoItem"; // Lakukan import

// Menerima function toggleCompleted sebagai sebuah prop
const Todos = ({ todos, toggleCompleted, deleteTodo }) => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            // Teruskan function toggleCompleted ke component TodoItem
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
};

const styles = {
  todoItem: {
    border: "2px solid #f4f4f4",
    fontSize: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  // Tambahkan styles di bawah ini
  checkbox: {
    marginRight: "10px",
    height: "18px",
    width: "18px",
  },
};

export default Todos;
