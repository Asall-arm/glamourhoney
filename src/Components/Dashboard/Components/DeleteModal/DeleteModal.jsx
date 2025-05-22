import React, { useEffect } from "react";
import "./DeleteModal.css";
import ReactDOM from "react-dom";

const DeleteModal = ({ isVisible, onClose, submit, cancle }) => {

  useEffect(() => {
    const checkKey = (event) => {
        console.log(event);
        if (event.keyCode === 27) {
            onClose()
        }
    }
    window.addEventListener('keydown', checkKey)
    return() => window.removeEventListener('keydown', checkKey)
})

  if (!isVisible) return null;
  
  return ReactDOM.createPortal(
    <div className="modal-parents active">
      <div className="delete-modal">
        <h1> آیا از تغییرات انجام شده مطمئن هستید؟ </h1>
        <div className="delete-modal-btn">
          <button className="delete-btn delete-modal-accept-btn" onClick={() => submit()}>بله</button>
          <button className="delete-btn delete-modal-reject-btn" onClick={() => cancle()}>خیر</button>
        </div>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
};
export default DeleteModal;
