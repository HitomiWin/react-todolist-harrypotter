
import {useContext, useState} from "react"
import {TodoContext} from "../contexts/TodoContext";
import TodoList from "../components/TodoList";
import DoneList from "../components/DoneList";
import dumbledore from "../assets/dumbledore-image.jpg"
function Home() {
  const {todos, doneTodos} =useContext(TodoContext )
  const[image, setImage]=useState(dumbledore)
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
        <img className="image" src={image} alt="image"/>      
        }
    </div>
  )
}

export default Home
