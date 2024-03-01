import { useState } from "react";
import Modal from "./Modal";
export default function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function openModal() {
    setModalIsOpen(true);
  }
  function cancelBtn() {
    setModalIsOpen(false);
  }

  return (
    <>
      <div className="card">
        <h2 className="title">{props.title}</h2>
        <p className="description">{props.description}</p>
        <div className="btn-box">
          <button
            // key={props.key}
            onClick={props.onEditTodo}
            className="btn btn--alt"
          >
            Edit
          </button>
          <button onClick={openModal} className="btn ">
            Delete
          </button>
          {modalIsOpen && (
            <Modal onCancelBtn={cancelBtn} confirmModal={props.onDelete} />
          )}
        </div>
      </div>
    </>
  );
}
