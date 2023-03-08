import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../ToDoSlices/Slices";

export const Storage = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
