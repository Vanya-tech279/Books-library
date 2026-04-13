import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books);

  const [search, setSearch] = useState("");

  const filtered = books.filter((b) => {
    return (
      (!category || b.category === category) &&
      (b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.author.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <div>
      <h2>Browse Books</h2>

      <input
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <Link to={`/book/${book.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}