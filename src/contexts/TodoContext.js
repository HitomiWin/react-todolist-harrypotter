import {createContext, useState, useEffect} from "react"

export const TodoContext = createContext();

const TodoContextProvider =(props)=>{
 
  const[todos, setTodos]=useState(JSON.parse(localStorage.getItem("todos"))||[
    { 
      todo:"Learn magic",
      author:"Harry Potter",
      time:new Date(1610319383000),   
    },
    {
      todo:"Make up with Ron",
      author:"Hermione",
      time:new Date(1610319383000),       
    },
    { 
      todo:"Feed the dragon",
      author:"Hagrid",
      time:new Date(1610319383000),   
    },
    { 
      todo:"Practice chess",
      author:"Ron",
      time:new Date(1610319383000),      
    },
  ]);

  const [doneTodos, setDoneTodos] = useState(JSON.parse(localStorage.getItem("doneTodos"))||[])
  const [isTodosChanged, setTodosChanged]=useState(false)
  const [isDoneTodosChanged, setDoneTodosChanged]=useState(false)
 

  useEffect(() => {
    if(isTodosChanged ){
      localStorage.setItem('todos',JSON.stringify(todos))
    } 
    setTodosChanged(false)
    setDoneTodosChanged(false)
  },[isTodosChanged])

  useEffect(() => {
    if(isDoneTodosChanged ){
      localStorage.setItem('doneTodos',JSON.stringify(doneTodos))
    } 
    setDoneTodosChanged(false)
  },[isDoneTodosChanged])

  const removeTodo=(index)=>{
    const updatedTodos = [...todos]
    updatedTodos.splice(index,1)   
    setTodos(updatedTodos)
    setTodosChanged(true)
  }
  const removeDoneTodo=(index)=>{
    const updatedDoneTodos = [...doneTodos]
    updatedDoneTodos.splice(index,1)   
    setDoneTodos(updatedDoneTodos)
    setDoneTodosChanged(true)
  }
  
  const addTodo =(e, todo, author, time ,history)=>{
    e.preventDefault()
    const newTodo = 
    { todo,
      author,
      time, 
    }
    setTodos([newTodo, ...todos])
    setTodosChanged(true)
    history.push('/')
  }
  const moveToDoneList=(todo)=>{
    const i =todos.indexOf(todo)
    const newTodos = [...todos] ;
    newTodos.splice(i,1)
    const newDoneTodos=[...doneTodos, todos[i]]
    setTodos(newTodos);
    setDoneTodos(newDoneTodos)
    setTodosChanged(true)
    setDoneTodosChanged(true)
  }
  const backDoneToTodoList=(done)=>{
    const i =doneTodos.indexOf(done)
    const newDoneTodos =[...doneTodos];
    newDoneTodos.splice(i,1)
    const newTodos=[...todos, doneTodos[i]]
    setDoneTodos(newDoneTodos)
    setTodos(newTodos)
    setTodosChanged(true)
    setDoneTodosChanged(true)
  }
  const upTodo=(todo)=>{
    const i =todos.indexOf(todo)-1
    const newTodos = [...todos] ;  
    if(i===-1){
      return
    }
    else{
      newTodos.splice(i,2,newTodos[i+1],  newTodos[i])
      setTodos(newTodos)
      setTodosChanged(true)
    }
    
  }
  const downTodo=(todo)=>{
    const i =todos.indexOf(todo)
    const newTodos = [...todos] ;  
    if(i===newTodos.length-1){
      return
    }
    else{
      newTodos.splice(i,2,newTodos[i+1],  newTodos[i])
      setTodos(newTodos)
      setTodosChanged(true)
    }   
  }
  const values={
    todos,
    removeTodo, 
    addTodo, 
    doneTodos, 
    moveToDoneList, 
    removeDoneTodo, 
    upTodo, 
    downTodo,
    backDoneToTodoList}

 return(
   <TodoContext.Provider value={values}>
    {props.children }
   </TodoContext.Provider>
 )
}

export default TodoContextProvider