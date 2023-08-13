

import { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';


function App() {
  
  const [text,setText] = useState("");
  const [listItems,setListItems] = useState([]);



  const addEvent = ()=>{

    if(text.length !== 0){
      setListItems((old)=>{
        return [...old,text];
      })
  }
    setText("");
  }
  const deleteItem = (id)=>{
    setListItems((old)=>{
      return old.filter((ele,index)=>{
        return id !== index
      })
    })
  }
  

  
  return (
    
    
    <div className="main ">




      <div className="container">
        <h1>TO-DO-LIST</h1>
        
        <div className="input2" >

        <input type='text' placeholder="Add a Item" value={text} onChange={(e)=>{setText(e.target.value)}}  /> 

        <button className='btn' onClick={addEvent}  > + </button>


        </div>

        
        <ul className='items'>
          {listItems.map((itemval,index)=>{
            return <ToDoList item= {itemval} key={index} id = {index} deleteItem={deleteItem} />
          })}

        </ul>
      </div>



    </div>
    
    
  );
}

export default App;
