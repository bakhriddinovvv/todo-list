function Modal(props) {
  return (
    <div onClick={props.onCancelBtn} className="backdrop">
      <div className="modal">
        <p>Are you sure?</p>
        <div className="btnBox">
          <button onClick={props.onCancelBtn} className="btn btn-all">
            Cancel
          </button>
          <button onClick={props.confirmModal} className="btn">
            Confrim
          </button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
