import { useContext, useState } from "react"
import { useHistory } from "react-router-dom";
import  {TodoContext} from "../contexts/TodoContext"
const AddTodoForm = () => {
  const {addTodo} = useContext(TodoContext)
  const [todo, setTodo] =useState();
  const [author, setAuthor]=useState();
  const [time]=useState(new Date())
  const history =useHistory()
  return (
    <div className="create-new-todo">
      <h1>Add New Todo</h1>
      <form onSubmit={(e)=>addTodo(e,todo,author,time,history)}  id="app">
        <label htmlFor="todo">Todo</label>
        <input  className="todo" id="todo" type="text" name="todo" required onChange={(e)=>setTodo(e.target.value)}/>   
        <label htmlFor="author">Author</label>
        <input  id="author" className="author"  type="text" name="author" required  onChange={(e)=>setAuthor(e.target.value)}/>
        <button type="submit">Add</button>
    </form>
  </div>
  )
}

export default AddTodoForm
