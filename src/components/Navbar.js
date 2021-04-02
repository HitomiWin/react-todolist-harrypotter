import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/react-todolist-harrypotter">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/add-todo">Add Todo</Link>
    </nav>
  )
}

export default Navbar
