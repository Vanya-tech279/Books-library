# 📚 Book Library App

A modern Book Library web application built using React (Vite), Redux Toolkit, React Router, and JSON Server API.  
It allows users to browse books, search, filter by category, view details, and add new books.

---

# 🚀 Features

- 📖 Home page with categories and popular books
- 📚 Browse books with API integration
- 🔍 Search books by title or author
- 🏷️ Filter books by category
- 📄 Book details page (dynamic routing)
- ➕ Add new books using POST API
- 🖼️ Book cards with cover images
- ⚡ Redux Toolkit for state management
- 🌐 JSON Server as backend
- 🎨 Responsive modern UI
- ❌ 404 Page for invalid routes

---

# 🛠️ Tech Stack

- React (Vite)
- Redux Toolkit
- React Router DOM
- JSON Server
- JavaScript (ES6+)
- CSS3

---

# 📁 Project Structure

src/
│
├── app/
│   └── store.js
│
├── features/
│   └── books/
│       └── booksSlice.js
│
├── pages/
│   ├── Home.jsx
│   ├── BrowseBooks.jsx
│   ├── BookDetails.jsx
│   ├── AddBook.jsx
│   └── NotFound.jsx
│
├── components/
│   └── Navbar.jsx
│
├── styles.css
└── main.jsx

---

# ⚙️ Setup Instructions

## 1. Install dependencies
npm install

## 2. Start JSON Server
json-server db.json --port 5000

API runs at:
http://localhost:5000/books

## 3. Start React App
npm run dev

---

# 📦 API Endpoints

GET /books → Get all books  
POST /books → Add new book  

---

# ✨ Features in Detail

## 📚 Browse Books
- Fetch data from API
- Display books in card layout

## 🔍 Search
- Search by title or author

## ➕ Add Book
- Form submission
- POST request to API
- Redirect to browse page

## 📄 Book Details
- Dynamic routing (/book/:id)
- Full book information

---

# 🎨 UI Features

- Modern card layout
- Hover animations
- Responsive grid system
- Clean navigation bar
- Image-based book cards

---

# 🧠 Learning Outcomes

- React component structure
- Redux Toolkit usage
- API integration with fetch
- Routing in React
- CRUD operations using JSON Server

---

# 👨‍💻 Author

Student Project – Book Library App  
Built using React + Redux + JSON Server

---

# 🚀 Status

✔ Completed  
✔ Working  
✔ Ready for Submission
