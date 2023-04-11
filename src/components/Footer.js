function Footer({ todos, setTodos, filter, setFilter }) {
  const handleClearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <footer className="footer">
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
