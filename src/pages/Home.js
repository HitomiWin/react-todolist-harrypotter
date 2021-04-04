
import {useContext, useState} from "react"
import {TodoContext} from "../contexts/TodoContext";
import TodoList from "../components/TodoList";
import DoneList from "../components/DoneList";
import owl from "../assets/kevin-mueller-KBHqwZ4z69Y-unsplash.jpg";
function Home() {
  const {todos, doneTodos} =useContext(TodoContext )
  const[image]=useState(owl)
  return (
    <div className="home">
      <h1>Preparing for battle</h1>     
      {todos.length>0 && todos.map((todo,i)=>(
       <TodoList key={i} todo={todo} />             
        ))}
      {doneTodos.length>0 && doneTodos.map((todo,i)=>(
       <DoneList  key={i} doneTodo={todo} />             
        ))}
      {doneTodos.length===0 && todos.length===0 
      &&
     <div> 
      <h1>Are you ready for battle?</h1>
        <img className="owlImage" src={image} alt="image"/>      
      </div>
      }
    </div>
  )
}

export default Home
