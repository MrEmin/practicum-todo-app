import { useState } from "react";
import Footer from "./Footer";

function TodoList({ todos, setTodos }) {
  const [filter, setFilter] = useState("all");

  const toggleCompleted = (id) => {
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
    setTodos(updatedTodos);
  };

  let filtered = todos;
  if (filter === "completed") {
    filtered = todos.filter((todo) => todo.completed);
  } else if (filter === "active") {
    filtered = todos.filter((todo) => !todo.completed);
  }

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

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

  const handleClearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

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
