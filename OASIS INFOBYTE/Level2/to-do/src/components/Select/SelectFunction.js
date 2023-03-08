import React from "react";
import "./SelectFunction.css";

function SelectFunction({ children, ...rest }) {
  return (
    <select className="button button__select" {...rest}>
      {children}
    </select>
  );
}
export { SelectFunction };
