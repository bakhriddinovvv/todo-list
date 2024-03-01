import { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import TodoWrapper from "./components/TodoWrapper";

function App() {
  return (
    <div>
      <h1>My Todo List</h1>
      <TodoWrapper />
    </div>
  );
}

export default App;
