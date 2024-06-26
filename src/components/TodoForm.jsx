import React, { useState } from "react";

import "../App.css";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(title, date);
    setTitle("");
    setDate("");
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  return (
    <div className="todoForm-container" style={styles.container}>
      <form
        style={styles.form}
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input
          style={styles.formInput}
          type="text"
          placeholder="Add your Todo"
          onChange={(event) => {
            handleChangeTitle(event);
          }}
          value={title}
        />
        <input
          type="date"
          style={styles.dateForm}
          onChange={(event) => {
            handleChangeDate(event);
          }}
          value={date}
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    marginBottom: "32px",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  dateForm: {
    maxWidth: "250px",
    width: "100%",
  },
  formInput: {
    width: "500px",
    height: "60px",
    fontSize: "1rem",
    padding: "0 18px",
  },
  button: {
    height: "72px",
    fontSize: "16px",
  },
};

export default TodoForm;
