import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../features/books/booksSlice";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: Date.now(),
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.author) return alert("Fill all fields");

    dispatch(addBook(form));
    navigate("/books");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" onChange={(e) => setForm({...form, title: e.target.value})} />
      <input placeholder="Author" onChange={(e) => setForm({...form, author: e.target.value})} />
      <button type="submit">Add Book</button>
    </form>
  );
}