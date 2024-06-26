import React, { useContext } from "react";
import { TodoContext } from "../App";

// Menerima function toggleCompleted sebagai sebuah prop
const TodoItem = ({ todo }) => {
  const { toggleCompleted, deleteTodo } = useContext(TodoContext);

  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      return { textDecoration: "line-through" };
    } else {
      return { textDecoration: "none" };
    }
  };

  return (
    <div style={styles.todoItem}>
      <input
        type="checkbox"
        style={styles.checkbox}
        onChange={() => toggleCompleted(todo.id)}
      />
      <h3 style={getTodoTitleStyle()}>{todo.title}</h3>
      <p style={getTodoTitleStyle()}>{todo.date}</p>
      <button style={styles.button} onClick={() => deleteTodo(todo.id)}>
        x
      </button>
    </div>
  );
};

// Salin CSS yang terbaru CSS di bawah ini
const styles = {
  todoItem: {
    maxWidth: "580px",
    width: "100%",
    border: "2px solid #f4f4f4",
    fontSize: "18px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    padding: "5px 20px",
  },
  checkbox: {
    height: "18px",
    width: "18px",
  },
  button: {
    backgroundColor: "#BB0000",
    color: "#fff",
    height: "40px",
    width: "40px",
    margin: "0",
    padding: "0",
    borderRadius: "100%",
    border: "none",
    cursor: "pointer",
  },
};

export default TodoItem;
