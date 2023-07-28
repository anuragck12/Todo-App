
import './App.css'
import { useState } from 'react';



function App() {
  const [toDos, setToDos] = useState([])
  const [todo, setTodo] = useState('')

 function handlecheck(index,value){
  toDos[index].status = value;
  setToDos([...toDos])   
 }

 function handledelete(index){
  toDos.splice(index,1);
  setToDos([...toDos])
 }


  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's Your Day 🌝 ☕ </h2>
    </div>
    <div className="input">
      <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
      <i onClick={()=>setToDos([...toDos,{text:todo,status:false}])} className="fas fa-plus"></i>
    </div>
    <div className="todos">
      {toDos.map((v,index)=>{
        return(
      <div className="todo">
        <div className="left">
          <input onClick={(e)=>{handlecheck(index,e.target.checked)}}value={v.status} type="checkbox" name="" />
          {v.status===false && (<p>{v.text}</p>)}
          {v.status===true && (<del>{v.text}</del>)}
        </div>
        <div className="right">
          <i onClick={()=> handledelete(index)} 
          className="fas fa-times"></i>
        </div>
      </div>)
      })}
    </div>
  </div>
  );
}

export default App;
