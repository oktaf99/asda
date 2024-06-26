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
            styles={styles.todoItem}
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1280px",
    width: "100%",
    flexWrap: "wrap",
    display: "flex", 
    justifyContent: "spaceBetween",
    alignItems: "center",
    gap: "20px",
  },
  todoItem: {
    border: "2px solid #f4f4f4",
    fontSize: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  checkbox: {
    marginRight: "10px",
    height: "18px",
    width: "18px",
  },
};

export default Todos;
