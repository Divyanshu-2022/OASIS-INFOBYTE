import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../ToDoSlices/Slices";
import "./Todomodel.css";
import AddButton from "../ButtonFolder/AddButton";
import { MdOutlineClose } from "react-icons/md";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
function ToDoModel({ type, modelOpen, setModelOpen, todo, checked }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");
  // const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (type === "update" && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
    } else {
      setTitle("");
      setStatus("");
    }
  }, [type, todo, modelOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      toast.error("please enter a Title");
      return;
    }

    if ((title, status)) {
      if (type === "add") {
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            time: new Date().toLocaleString(),
          })
        );
        toast.success("task Added Successfully ");
        setModelOpen(false);
      }
      if (type === "update") {
        if (todo.title !== title || todo.status !== status) {
          dispatch(updateTodo({ ...todo, title, status }));
          toast.success("Task Updates Successfully");
        } else {
          toast.error("No Changes Made");
        }
      }
      setModelOpen(false);
    }
  };
  return (
    modelOpen && (
      <div className="wrapper">
        <div className="container">
          <div
            className="closeButton"
            onClick={() => setModelOpen(false)}
            onKeyDown={() => setModelOpen(false)}
            tabIndex={0}
            role="button"
          >
            <MdOutlineClose />
          </div>
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <h1 className="formTitle">
              {type === "update" ? "UpDate" : "Add"} Task
            </h1>
            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Your Title Here"
              />
            </label>
            {/* <label htmlFor="Description">
              <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              />
            </label> */}
            <label htmlFor="status">
              Status
              <select
                name="status"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Select One">{setStatus}All</option>
                <option value="complete">Complete</option>
                <option value="incomplete">InComplete</option>
              </select>
            </label>
            <div className="buttonContainer">
              <AddButton type="submit">
                {type === "update" ? "UpDate" : "Add"} Task
              </AddButton>
              <AddButton
                type="button"
                className="button button__secondary"
                onClick={() => setModelOpen(false)}
                onKeyDown={() => setModelOpen(false)}
              >
                Cancel
              </AddButton>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default ToDoModel;
