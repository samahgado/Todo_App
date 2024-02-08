import React from 'react'
import "./Lists.css"
import { useTodoStore } from '../../store/TodoStore'
import List from '../list/List'
import { ListType } from '../../store/TodoStore'
import FormList from '../formList/FormList'

const Lists = () => {
  const lists = useTodoStore(state => state.lists)

  return (
    <div className='lists'> 
    <h2 className='lists-title'>
      My lists
    </h2>
    <ul className='lists-content'>
      {lists?.length > 0 ?lists.map((list:ListType)=>(<List list={list} key={list.id} />)): <p >🙄 No Lists yet 👇</p> }
    </ul>
    <FormList/>
  
    </div>
  )
}

export default Lists