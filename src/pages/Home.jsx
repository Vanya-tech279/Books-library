import { Link } from "react-router-dom";

export default function Home() {
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi"];

  return (
    <div>
      <h1>Welcome to Book Library</h1>

      <h3>Categories</h3>
      {categories.map((c) => (
        <Link key={c} to={`/books/${c}`}>
          <button>{c}</button>
        </Link>
      ))}
    </div>
  );
}