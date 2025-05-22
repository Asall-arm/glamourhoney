import React, { useEffect } from "react";
import "./DetailModal.css";

const DetailModal = ({ onClose, children }) => {

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

  return (
    <div className=" modal-parent active">
      <div className="detail-modal">
{children}
      </div>
    </div>
  );
};

export default DetailModal;
