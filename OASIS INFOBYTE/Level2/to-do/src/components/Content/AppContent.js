import React from "react";
import { useSelector } from "react-redux";
import ToDoItem from "../Todolistitem/ToDoItem";

function AppContent() {
  const todoList = useSelector((state) => state.todo.todoList);
  const sortContent = [...todoList];
  sortContent.sort((a, b) => new Date(b.time) - new Date(a.time));
  return (
    <div className="content__wrapper">
      {sortContent && sortContent.length > 0
        ? sortContent.map((todo) => <ToDoItem key={todo.id} todo={todo} />)
        : "no to do found"}
    </div>
  );
}

export default AppContent;
