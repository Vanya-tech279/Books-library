{/***** ADD BOOK FUNCTIONAITY******/ }
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBook } from "../features/books/booksSlice";

export default function AddBook() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
    image: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.author || !form.category) {
      alert("Please fill all required fields");
      return;
    }

    const newBook = {
      id: Date.now().toString(),
      ...form,
      rating: Number(form.rating) || 4
    };

    dispatch(addBook(newBook)); // ✅ REDUX

    alert("Book added successfully ✅");
    navigate("/books");
  };

  return (
    <div className="page">
      <h2>Add New Book</h2>

      <form className="form" onSubmit={handleSubmit}>
        <input placeholder="Title" onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <input placeholder="Author" onChange={(e) => setForm({ ...form, author: e.target.value })} />
        <input placeholder="Category" onChange={(e) => setForm({ ...form, category: e.target.value })} />
        <input placeholder="Description" onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <input type="number" placeholder="Rating" onChange={(e) => setForm({ ...form, rating: e.target.value })} />
        <input placeholder="Image URL" onChange={(e) => setForm({ ...form, image: e.target.value })} />

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}