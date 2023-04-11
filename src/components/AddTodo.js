import { useState, useEffect } from "react";

function AddTodo({ addTodo, todos }) {
  // Declare a state variable called inputText using the useState hook, and initialize it with an empty string.
  const [inputText, setInputText] = useState("");

  // Get the last id of the existing todos, and assign it to a variable called lastId. If there are no todos, set lastId to 0.
  const lastId = todos.length > 0 ? todos[todos.length - 1].id : 0;

  // This function is called whenever the input field changes, and updates the inputText state with the new value.
  const onChangeInput = (e) => {
    setInputText(e.target.value);
  };

  // This function is called when the form is submitted. It creates a new todo object with an incremented id, the inputText as text, and completed set to false.
  // Then, it passes the updated todos array to the addTodo function.
  const onSubmit = (e) => {
    e.preventDefault();
    if (inputText.text === "") {
      return false;
    }
    const newTodo = { id: lastId + 1, text: inputText, completed: false };
    addTodo([...todos, newTodo]);
  };

  // This useEffect hook is called whenever the todos array changes. It resets the inputText state to an empty string.
  useEffect(() => {
    setInputText("");
  }, [todos]);

  // This component renders a form with an input field, and listens for changes and submission events.
  // The value of the input field is set to the inputText state, and the onChange and onSubmit functions are called when appropriate.
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
