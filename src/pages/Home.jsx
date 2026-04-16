{/***** BHOME PAGE******/ }
import { Link } from "react-router-dom";

export default function Home() {
  const categories = [
    "Fiction",
    "Sci-Fi",
    "Fantasy",
    "Self-help",
    "Finance",
    "Biography"
  ];

  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <div className="hero">
        <h1> Welcome to Book Library</h1>
        <p>Explore, Read & Discover Amazing Books</p>

        <Link to="/books" className="hero-btn">
          Browse Books
        </Link>
      </div>

      {/* CATEGORIES */}
      <h2 className="section-title">Book Categories</h2>

      <div className="category-grid">
        {categories.map((cat, i) => (
          <Link key={i} to={`/books/${cat}`} className="category-card">
            {cat}
          </Link>
        ))}
      </div>

      {/* POPULAR SECTION*/}
      <h2 className="section-title">Popular Picks</h2>

      <div className="popular-preview">
        <div>🔥 Dune</div>
        <div>🔥 Harry Potter</div>
        <div>🔥 Atomic Habits</div>
      </div>

    </div>
  );
}