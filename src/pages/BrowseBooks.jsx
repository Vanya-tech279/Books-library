{/***** BROWSE BOOKS ******/ }

import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books);

  const filteredBooks = category
    ? books.filter(
        (b) => b.category.toLowerCase() === category.toLowerCase()
      )
    : books;

  return (
    <div className="browse-container">
      <h2 className="page-title">Browse Books</h2>

      <div className="books-grid">
        {filteredBooks.map((book) => (
          
        
          <Link to={`/book/${book.id}`} className="book-card" key={book.id}>
            
            <div className="img-wrapper">
              <img src={book.image} alt={book.title} />
            </div>

            <div className="book-info">
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p className="category">{book.category}</p>
            </div>

          </Link>

        ))}
      </div>
    </div>
  );
}