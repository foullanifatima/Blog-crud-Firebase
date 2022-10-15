import logo from '../assets/travelMile..png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo travel mile" />
      <nav class="none nav" id="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add new Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
