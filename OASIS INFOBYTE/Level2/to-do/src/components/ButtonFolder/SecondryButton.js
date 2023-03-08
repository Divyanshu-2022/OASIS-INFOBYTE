import React from "react";
import "./button.css";
export default function SecondButton({ children, ...rest }) {
  return (
    <button className="button button__secondary" {...rest}>
      {children}
    </button>
  );
}
