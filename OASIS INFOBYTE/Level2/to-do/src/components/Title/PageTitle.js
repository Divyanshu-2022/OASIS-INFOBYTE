import React from "react";
import "./PageTitle.css";
function PageTitle({ ...rest }) {
  return (
    <div className="title">
      <h1 {...rest}>To Do List</h1>
    </div>
  );
}

export default PageTitle;
