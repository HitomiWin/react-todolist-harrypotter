import {useState, useContext} from "react"
import {TodoContext} from "../contexts/TodoContext"
const TodoList = (props) => {
  const {removeTodo, moveToDoneList ,upTodo, downTodo}=useContext(TodoContext)
  const[time]=useState(
    new Date(props.todo.time).toLocaleString()
  )
  
  return (
    <div >
      <ul>
    <li className="todo-list-container" >
    <div className="arrow-container">
      <span onClick={()=>upTodo(props.todo)} className="arrow">&#8593;</span>
      <span onClick={()=>downTodo(props.todo)} className="arrow">&#8595;</span> 
    </div>  
      <div  onClick={()=>moveToDoneList(props.todo)} className="todo" >
        <p><span>{props.todo.todo}</span></p>         
        <div className="sub-disc">
        <p>Created by <span className="author">{props.todo.author}</span></p> 
        <p className="time"><span>{time}</span></p>
        </div>
      </div>   
      <p onClick={()=>removeTodo(props.todo)} className="remove-button">X</p>
    </li>        
  </ul>
    </div>
  )
}

export default TodoList
