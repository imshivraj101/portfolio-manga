import './Navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">My Story</Link>
        <Link to="/ideas">Ideas</Link>
        <Link to="/outlook">Outlooks</Link>
      </div>
     
      <div className="navbar-right">
        <h1>Shivraj.dev</h1>
      </div>
    </nav>
  )
}
