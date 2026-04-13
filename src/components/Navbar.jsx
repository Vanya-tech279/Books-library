import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/books">Browse Books</Link>
      <Link to="/add">Add Book</Link>
    </nav>
  );
}