import React from "react";
import "./ErrorModal.css";

const ErrorModal = ({ errorApiMessage, closeErrorModal }) => {
  return (
    <div className="black-layout">
      <div className="error-container">
        <p>Sorry, but {errorApiMessage}. Plaese, try another city name</p>
        <div onClick={closeErrorModal} className="close-error-modal">
          <p>Close</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
