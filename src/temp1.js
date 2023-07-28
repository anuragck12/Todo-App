
import './App.css'
import { useState } from 'react';



function App() {
  const [toDos, setToDos] = useState([])
  const [todo, setTodo] = useState('')
  console.log("12564s");
  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
    </div>
    <div className="input">
      <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
      <i onClick={()=>setToDos([...toDos,{id:Date.now(),text:todo,status:false}])} className="fas fa-plus"></i>
    </div>
    <div className="todos">
      {toDos.map((v,index)=>{
        return(
      <div className="todo">
        <div className="left">
          <input onChange={(e)=>{
            console.log(e.target.checked)
            setToDos(toDos.filter(v2=>{
              var a 
              if(v2.id===v.id){
                v2.status=e.target.checked
                 a = v2.text
            
              }
              if (v2.status === true) {
                v2.text = <del>{v2.text}</del>;
              }
              if(v2.status===false){
                console.log(a)
                v2.text = v.text
                
              }
              return v2
            }))

          }}value={v.status} type="checkbox" name="" id="" />
          <p>{v.text}</p>
        </div>
        <div className="right">
          <i onClick={
            ()=>{
              setToDos(toDos.filter((v2)=>{
                return v2.id!==v.id
              }))
            }
            } className="fas fa-times"></i>
        </div>
      </div>)
      })}
    </div>
  </div>
  );
}

export default App;
