import React, { useState } from "react";

import "../App.css";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(title);
    setTitle(""); // Reset title-nya
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="todoForm-container">
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input
          type="text"
          placeholder="Add your Todo"
          onChange={(event) => {
            handleChangeTitle(event);
          }}
          value={title} // Atur nilai dari input sesuai dengan state  "title"
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
};

// const styles = {
//   container: {
//     width: "100%",
//     marginBottom: "32px",
//   },
//   form: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: "10px",
//   },
//   formInput: {
//     width: "100%",
//     height: "50px",
//     fontSize: "16px",
//     padding: "0 16px",
//   },
//   button: {
//     height: "72px",
//     fontSize: "16px",
//   },
// };

export default TodoForm;
