import React from 'react'
import "./TodoPageComponent.css"
import Lists from '../lists/Lists'

const TodoPageComponent = () => {
  return (
    <div className='wrapper'>
    <h1 className="title">Stuff I need to do <span className="logo">📝</span></h1>
      <div className='appContainer'>
        <Lists/>
        </div>
    </div>
  
  )
}

export default TodoPageComponent