import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import AddTodoForm from './pages/AddTodoForm'
import TodoContextProvider from './contexts/TodoContext'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <TodoContextProvider>
        <Route exact path ="/" component={Home} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/add-todo" component={AddTodoForm} />
        </TodoContextProvider>
      </Router>
    </div>
  )
}

export default App

