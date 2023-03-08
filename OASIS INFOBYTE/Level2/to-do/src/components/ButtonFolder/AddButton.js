import React from "react";
import "./button.css";

function AddButton({ children, ...rest }) {
  return (
    <button className="button button__primary" {...rest}>
      {children}
    </button>
  );
}

export default AddButton;
