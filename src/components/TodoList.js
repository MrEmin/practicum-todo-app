import { useState } from "react";
import Footer from "./Footer";

function TodoList({ todos, setTodos }) {
  // Set the initial state of filter to "all".
  const [filter, setFilter] = useState("all");

  // Toggle the completed status of a todo item when the checkbox is clicked.
  const toggleCompleted = (id) => {
    // Create a new array with updated todo items.
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
    // Update the state variable with the new array of todo items.
    setTodos(updatedTodos);
  };

  // Initialize a variable to store filtered todo items.
  let filtered = todos;

  // Apply the filter based on the selected filter value.
  if (filter === "completed") {
    filtered = todos.filter((todo) => todo.completed);
  } else if (filter === "active") {
    filtered = todos.filter((todo) => !todo.completed);
  }

  // Remove a todo item when the delete button is clicked.
  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Toggle the completed status of all todo items.
  const toggleAllCompleted = () => {
    const allCompleted = todos.every((todo) => todo.completed);
    const updatedTodos = todos.map((todo) => {
      return {
        ...todo,
        completed: !allCompleted,
      };
    });
    setTodos(updatedTodos);
  };

  // Remove all completed todo items.
  const handleClearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  // Render the todo list, toggle all checkbox, and footer.
  return (
    <section className="main">
      <input
        className="toggle-all"
        type="checkbox"
        checked={todos.every((todo) => todo.completed)}
        onChange={() => toggleAllCompleted()}
      />
      {todos.length === 0 ? null : (
        <label htmlFor="toggle-all" onClick={() => toggleAllCompleted()}>
          Mark all as complete
        </label>
      )}

      <ul className="todo-list">
        {filtered.map((todo) => (
          <li className={todo.completed ? "completed" : ""} key={todo.id}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompleted(todo.id)}
              />
              <label>{todo.text}</label>
              <button
                className="destroy"
                onClick={() => handleDelete(todo.id)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
      {todos.length === 0 ? null : (
        <Footer
          todos={todos}
          setTodos={setTodos}
          filter={filter}
          setFilter={setFilter}
          handleClearCompleted={handleClearCompleted}
        />
      )}
    </section>
  );
}

export default TodoList;
