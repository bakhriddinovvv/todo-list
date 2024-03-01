import { useState } from "react";

function TodoForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  function getTitle(e) {
    setTitle(e.target.value);
  }

  function getDescription(e) {
    setDescription(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    props.onAddTodo(title, description);
    setTitle("");
    setDescription("");
  }

  return (
    <>
      <section className="formBox">
        <form onSubmit={submitHandler}>
          <h1>Add new todo</h1>
          <div className="labelContainer">
            <input
              required
              value={title}
              onChange={getTitle}
              type="text"
              id="name"
              placeholder="Enter a title..."
            />
          </div>
          <div className="labelcontainer">
            <textarea
              required
              value={description}
              onChange={getDescription}
              id="description"
              rows="2"
            ></textarea>
          </div>
          <div className="btnBox">
            <button type="submit" className="btn">
              Add new todo
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default TodoForm;
