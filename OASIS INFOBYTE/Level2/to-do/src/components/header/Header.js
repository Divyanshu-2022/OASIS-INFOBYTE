import React, { useState } from "react";
import AddButton from "../ButtonFolder/AddButton";
// import SecondButton from "../ButtonFolder/SecondButton";
import ToDoModel from "../ToDoModal/ToDoModel";
import { SelectFunction } from "../Select/SelectFunction";
import "./Header.css";
import { useSelector } from "react-redux";

function Header() {
  const [modelOpen, setModelOpen] = useState(false);
  const initialFilterStatus = useSelector((state) => state.todo.filterStatus);
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);

  const updateFilter = () => {
    console.log("updating status");
  };
  return (
    <div className="app__holder">
      <div className="app__Header">
        <AddButton onClick={() => setModelOpen(true)}>Add Task</AddButton>
        <SelectFunction
          id="status"
          value={filterStatus}
          onChange={updateFilter()}
        >
          <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="complete">Complete</option>
        </SelectFunction>
        <ToDoModel
          type="add"
          modelOpen={modelOpen}
          setModelOpen={setModelOpen}
        ></ToDoModel>
      </div>
    </div>
  );
}
export default Header;
