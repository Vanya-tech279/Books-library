import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function BookDetails() {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.books.find((b) => b.id == id)
  );

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <p>Rating: {book.rating}</p>

      <Link to="/books">
        <button>Back</button>
      </Link>
    </div>
  );
}