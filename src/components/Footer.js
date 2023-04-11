function Footer({ todos, setTodos, filter, setFilter }) {
  // This function handles the click event of the "Clear completed" button.
  // It filters out all completed todos from the existing todos array, and updates the state of todos with the new array.
  const handleClearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  // This component represents the footer of the todo app. It displays the number of items left to complete, and provides links to filter the todos by status (all, active, or completed).
  // It also renders a button to clear all completed todos.
  return (
    <footer className="footer">
      {/* This span displays the number of items left to complete. It calculates the length of the array of todos that have not been completed, and displays it as part of the string "x items left". */}
      <span className="todo-count">
        <strong>{`${
          todos.filter((todo) => !todo.completed).length
        } items left`}</strong>
      </span>
      <ul className="filters">
        <li>
          <a
            href="/#"
            className={filter === "all" ? "selected" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="/#"
            className={filter === "active" ? "selected" : ""}
            onClick={() => setFilter("active")}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="/#"
            className={filter === "completed" ? "selected" : ""}
            onClick={() => setFilter("completed")}
          >
            Completed
          </a>
        </li>
      </ul>
      <button className="clear-completed" onClick={handleClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
