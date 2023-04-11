import { useState, useEffect } from "react";

function AddTodo({ addTodo, todos }) {
  const [inputText, setInputText] = useState("");

  const lastId = todos.length > 0 ? todos[todos.length - 1].id : 0;

  const onChangeInput = (e) => {
    setInputText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputText.text === "") {
      return false;
    }
    const newTodo = { id: lastId + 1, text: inputText, completed: false };
    addTodo([...todos, newTodo]);
  };

  useEffect(() => {
    setInputText("");
  }, [todos]);

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="text"
          className="new-todo"
          placeholder="What needs to be done?"
          value={inputText}
          onChange={onChangeInput}
        />
      </div>
    </form>
  );
}

export default AddTodo;
