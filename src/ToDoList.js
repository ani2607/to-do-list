import React from 'react'
import {GiCancel} from 'react-icons/gi'

import './App.css';

const ToDoList = ({item,deleteItem,id}) => {
  return (
    <div className='list_items'>
        <span className='cross' onClick={()=>{
          deleteItem(id);
        }}><GiCancel size={25}/></span>
      <li > {item}</li>
      
    </div>
  )
}

export default ToDoList
