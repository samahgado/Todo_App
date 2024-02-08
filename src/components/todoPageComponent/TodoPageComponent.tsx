import "./TodoPageComponent.css"
import Lists from '../lists/Lists'
import ListModal from '../listModal/ListModal'
import { useTodoStore } from "../../store/TodoStore";

const TodoPageComponent = () => {
  const activeListId = useTodoStore((state) => state.activListId);
  
  return (
    <div className='wrapper'>
    <h1 className="title">Stuff I need to do <span className="logo">📝</span></h1>
      <div className='appContainer'>
        <Lists/>
        {activeListId && <ListModal/> }
       
        </div>
    </div>
  
  )
}

export default TodoPageComponent