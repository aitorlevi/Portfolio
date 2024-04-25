import React from "react";

export const Notification = ({ message }) => {
  return (
    <div className="popup-container">
      <div className="popup-mail">
        <div className="modal">{message}</div>
      </div>
    </div>
  );
};
