import { useEffect, useState } from "react";

export default function BrowseBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

 return (
  <div className="browse-container">
  <h2 className="page-title">Browse Books</h2>

  <div className="books-grid">
    {books.map((book) => (
      <div className="book-card" key={book.id}>
        
        <div className="img-wrapper">
          <img src={book.image} alt={book.title} />
        </div>

        <div className="book-info">
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p className="category">{book.category}</p>
        </div>

      </div>
    ))}
  </div>
</div>
);
}