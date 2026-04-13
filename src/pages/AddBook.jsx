import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBook = {
      id: Date.now(),
      ...form
    };

    await fetch("http://localhost:5000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBook)
    });

    navigate("/books");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        placeholder="Author"
        onChange={(e) => setForm({ ...form, author: e.target.value })}
      />
      <input
        placeholder="Category"
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />

      <button type="submit">Add Book</button>
    </form>
  );
}