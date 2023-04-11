import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

// Define the Todo component.
function Todo() {
  // Declare the todos state with an array of initial values.
  const [todos, setTodos] = useState([
    { text: "Learn React", completed: false, id: 0 },
    { text: "Write Code", completed: true, id: 1 },
    { text: "Build App", completed: false, id: 2 },
  ]);

  // Render the Todo component.
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

// Export the Todo component.
export default Todo;
