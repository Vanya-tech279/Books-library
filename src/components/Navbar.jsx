import { Link } from "react-router-dom";
{/***** Nav Bar ******/ }
export default function Navbar() {
  return (
    <nav>
      <div className="nav-logo">📚 Shelf Space</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/books">Browse Books</Link>
        <Link to="/add">Add Book</Link>
      </div>
    </nav>
  );
}