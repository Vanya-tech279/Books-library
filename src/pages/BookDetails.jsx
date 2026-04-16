{/***** BOOK DETAILS******/ }

import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function BookDetails() {
  const { id } = useParams();

  const book = useSelector((state) =>
    state.books.find((b) => b.id === id)
  );

  if (!book) return <h2>Book not found</h2>;

  return (
    <div className="details-page">
      <h1 className="details-title">{book.title}</h1>

      <div className="details-container">

        <div className="details-info">
          <p><b>Author:</b> {book.author}</p>
          <p><b>Category:</b> {book.category}</p>
          <p>{book.description}</p>
          <p>⭐ Rating: {book.rating}</p>

          <Link to="/books">
            <button className="back-btn">⬅ Back</button>
          </Link>
          <button onClick={() => window.open(book.wiki, "_blank")} className="Read-btn">
  📖 Read
</button>
        </div>

       
        <div className="details-image">
          <img src={book.image} alt={book.title} />
        </div>

      </div>
    </div>
  );
}