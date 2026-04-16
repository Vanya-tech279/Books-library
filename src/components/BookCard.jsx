import { Link } from "react-router-dom";
{/***** Book cards******/ }
export default function BookCard({ book }) {
  return (
    <Link to={`/book/${book.id}`} className="book-card">
      
      <div className="img-wrapper">
        <img src={book.image} alt={book.title} />
      </div>

      <div className="book-info">
        <h3>{book.title}</h3>
        <p>Author: {book.author}</p>
        <p className="category">{book.category}</p>
      </div>

    </Link>
  );
}