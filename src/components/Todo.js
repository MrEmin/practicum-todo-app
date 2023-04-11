import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function Todo() {
  const [todos, setTodos] = useState([
    { text: "Learn React", completed: false, id: 0 },
    { text: "Write Code", completed: true, id: 1 },
    { text: "Build App", completed: false, id: 2 },
  ]);

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <AddTodo addTodo={setTodos} todos={todos} />
        </header>
        <TodoList todos={todos} setTodos={setTodos} />
      </section>
    </>
  );
}

export default Todo;
