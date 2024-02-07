
import { useState } from "react"
import "./FormList.css"
import { useTodoStore } from "../../store/TodoStore"

const FormList = () => {
  const addList = useTodoStore(state => state.addList)
  const [newListName , setNewListName] = useState("")
  const handleInputChange = (event) => {
    setNewListName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newListName.trim() === '') {
      return; // Prevent adding empty list names
    }
    const newList = { id: Date.now(), name: newListName, todos: [] };
    addList(newList)

    
    setNewListName('');
  };
  return (
    <form action="" onSubmit={handleFormSubmit}>
      <input type="text" name="newListName" value={newListName} onChange={handleInputChange} className="new" placeholder="new list name"/>
      <button aria-label="create new list" className="btn btn-list ">+</button>
    </form>
  )
}

export default FormList