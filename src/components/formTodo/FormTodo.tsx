import { useState } from "react";
import { useTodoStore } from "../../store/TodoStore";

const FormTodo = () => {
  const addTodo = useTodoStore((state) => state.addTodo);

  const [newTodoName, setNewTodoName] = useState("");
  const handleChange = (event: any) => {
    setNewTodoName(event.target.value);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (newTodoName.trim() === "") {
      return;
    }
    const newTodo = { id: Date.now(), title: newTodoName, completed: false };

    addTodo(newTodo);
    setNewTodoName("");
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        name="newTodoName"
        className="new"
        placeholder="new todo name"
        value={newTodoName}
        onChange={handleChange}
      />
      <button aria-label="create new list" className="btn btn-list ">
        +
      </button>
    </form>
  );
};

export default FormTodo;
