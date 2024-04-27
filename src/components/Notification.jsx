import React from "react";

export const Notification = ({ message }) => {
  return (
    <div className="snackbar">
      <div className="info">{message}</div>
    </div>
  );
};
