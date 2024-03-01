import { useState, useEffect } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import EditTodo from "./EditTodo";

function TodoWrapper() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const saveTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(saveTodos);
  }, []);
  function addTodo(title, description) {
    const newTodos = [
      ...todos,
      {
        id: new Date(),
        task: title,
        theme: description,
        isEditing: false,
      },
    ];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }
  function editTodo(id) {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    );
    setTodos(newTodos);
  }
  function saveEditing(task, theme, id) {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...id, task, theme, isEditing: !todo.isEditing } : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  return (
    <>
      <TodoForm onAddTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodo
            onCancel={() => editTodo(todo.id)}
            onSaveEditing={saveEditing}
            id={todo.id}
            task={todo.task}
            description={todo.theme}
            key={todo.id}
          />
        ) : (
          <Todo
            onEditTodo={() => editTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            key={todo.id}
            title={todo.task}
            description={todo.theme}
          />
        )
      )}
    </>
  );
}
export default TodoWrapper;
