import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import "../Todolistitem/ToDoItem.css";
import { deleteTodo, updateTodo } from "../ToDoSlices/Slices";
import ToDoModel from "../ToDoModal/ToDoModel";
import Checkbutton from "../CheckButton/Checkbutton";
function ToDoItem({ todo }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    if (todo.status === "complete") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);
  const [updateModelOpen, setUpdateModelOpen] = useState(false);
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success("Todo Deleted Successfully");
  };
  const handleEdit = () => {
    setUpdateModelOpen(true);
  };
  const handleCheck = () => {
    setChecked(!checked);
    dispatch(
      updateTodo({ ...todo, status: checked ? "incomplete" : "complete" })
    );
  };
  return (
    <>
      <div className="item">
        <div className="todoDetails">
          <Checkbutton checked={checked} handleCheck={handleCheck} />
          <p className="todotext item">{todo.title}</p>
          <p className="time">{format(new Date(todo.time), "p, MM/dd/yyyy")}</p>
        </div>
        <div className="todoActions">
          <div
            className="icon"
            role="button"
            tabIndex={0}
            onClick={handleDelete}
          >
            <MdDelete />
          </div>
          <div className="icon" role="button" tabIndex={1} onClick={handleEdit}>
            <MdEdit />
          </div>
        </div>
      </div>
      <ToDoModel
        type="update"
        todo={todo}
        modelOpen={updateModelOpen}
        setModelOpen={setUpdateModelOpen}
      />
    </>
  );
}

export default ToDoItem;
