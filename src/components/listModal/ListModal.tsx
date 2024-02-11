import "./ListModal.css";
import { useTodoStore } from "../../store/TodoStore";
import Todo from "../todo/Todo";
import FormTodo from "../formTodo/FormTodo";
import { useRef } from "react";

const ListModal = () => {
  const screenWidth = window.innerWidth;
  const activeListId = useTodoStore((state) => state.activListId);
  const lists = useTodoStore((state) => state.lists);
  const remainingTodos = useTodoStore((state) => state.remainingTodos);
  const activeList = lists.find((list) => list.id === activeListId);
  const deleteList = useTodoStore((state) => state.deleteList);
   const selectedListId = useTodoStore((state) => state.selectedListId);
  const handleDeleteList = () => {
    deleteList();
    selectedListId(null);
  };
  const todos = activeList?.todos;
  const remainingTodosNumber = todos?.filter(
    (todo) => todo.completed === false
  ).length;
  

  return (
    <>
    <div className="modal-overlay"></div>
    <div className="modal-content">
   
   
      <div className="modal-header">
      <p className="close" onClick={()=> selectedListId(null)}>&times;</p>
        <h3 className="modal-header-title">{activeList?.name}</h3>
        <p className="modal-header-remains">
          {remainingTodosNumber && remainingTodosNumber > 0
            ? `${remainingTodosNumber} task${
                remainingTodosNumber > 1 ? "s" : ""
              } remaining`
            : ""}
        </p>
      </div>
      
      <div className="modal-body">
        {todos && todos.length > 0 ? todos?.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ) ):<p className="notodo">🙄 No Todos yet 👇</p>}
        <FormTodo />
        <div className="delete-stuff">
          <button className="btn delete" onClick={remainingTodos}>
            Clear completed tasks
          </button>
          <button className="btn delete" onClick={handleDeleteList}>
            Delete list
          </button>
        </div>
      </div>
      </div>
    </>
      
    
  );
};

export default ListModal;
