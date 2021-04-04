import { useContext , useState} from "react"
import { TodoContext } from "../contexts/TodoContext"
import styles from "../css/DoneList.module.css"
const DoneList = (props) => {
  const {moveToTodoList, removeDoneTodo, backDoneToTodoList}=useContext(TodoContext)
  const[time]=useState(
    new Date(props.doneTodo.time).toLocaleString()
  )
  
  return (
    <div >
      <ul>
    <li  className={styles.doneListContainer} onClick ={()=>backDoneToTodoList(props.doneTodo)} >
      <div  className={styles.todo} >
        <p><span>{props.doneTodo.todo}</span></p>         
        <div className={styles.subDisc}>
        <p>Created by <span className={styles.author}>{props.doneTodo.author}</span></p> 
        <p className={styles.time}><span>{time}</span></p>
        </div>
      </div>   
      <p  onClick={(e)=>removeDoneTodo(props.doneTodo,e)}className={styles.removeButton}>X</p>
    </li>        
  </ul>
    </div>
  )
}

export default DoneList
