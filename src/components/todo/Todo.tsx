import React from "react";
import "./Todo.css";
import { useTodoStore } from "../../store/TodoStore";

const Todo = ({ todo }: any) => {
  const editTodoStatus = useTodoStore((state) => state.editTodoStatus);
  return (
    <div className="todo" onClick={() => editTodoStatus(todo.id)}>
      {!todo.completed ? <span className="circle"></span> : "✔️ "}{" "}
      <span className={`${todo.completed && "completed"}`}>{todo?.title}</span>
    </div>
  );
};

export default Todo;
