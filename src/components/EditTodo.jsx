import { useState } from "react";

function EditTodo(props) {
  const [title, setTitle] = useState(props.task);
  const [description, setDescription] = useState(props.description);

  function getEditedTitle(e) {
    setTitle(e.target.value);
  }

  function getEditedDescription(e) {
    setDescription(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    props.onSaveEditing(title, description, props.id);
  }
  return (
    <>
      <section className="formBox">
        <form onSubmit={submitHandler}>
          <h1>Edit todo</h1>
          <div className="labelConteiner">
            <input
              onChange={getEditedTitle}
              value={title}
              required
              id="name"
              placeholder="Edit a todo title..."
              type="text"
            />
          </div>
          <div className="labelConteiner">
            <textarea
              onChange={getEditedDescription}
              value={description}
              required
              id="description"
              rows={2}
              placeholder="Edit a todo description..."
              type="text"
            />
          </div>
          <div className="btnBox">
            <buttton onClick={props.onCancel} className="btn btn--alt">
              Cancel
            </buttton>
            <button type="submit" className="btn">
              Update todo
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default EditTodo;
