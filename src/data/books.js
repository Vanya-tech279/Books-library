/// ===============================Books List========================/////


const books = [
  { id: "1", title: "Dune", author: "Frank Herbert", category: "Sci-Fi", description: "Epic sci-fi novel", rating: 4.5, image: "https://m.media-amazon.com/images/I/81T5ecpb8aL._SL1481_.jpg", wiki: "https://en.wikipedia.org/wiki/Dune_(novel)"  },
  { id: "2", title: "Harry Potter", author: "J.K. Rowling", category: "Fiction", description: "Wizard world", rating: 4.8, image: "https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg" , wiki: "https://en.wikipedia.org/wiki/Harry_Potter"},
  { id: "3", title: "The Hobbit", author: "J.R.R. Tolkien", category: "Fantasy", description: "Middle Earth adventure", rating: 4.7, image: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg" , wiki: "https://en.wikipedia.org/wiki/The_Hobbit"},
  { id: "4", title: "1984", author: "George Orwell", category: "Dystopian", description: "Big Brother world", rating: 4.6, image: "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg" , wiki: "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four"},
  { id: "5", title: "To Kill a Mockingbird", author: "Harper Lee", category: "Classic", description: "Justice story", rating: 4.8, image: "https://m.media-amazon.com/images/I/51Z9p5AecCL._SY445_SX342_FMwebp_.jpg", wiki: "https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird" },

  { id: "6", title: "The Alchemist", author: "Paulo Coelho", category: "Philosophy", description: "Life journey", rating: 4.4, image: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg" , wiki: "https://en.wikipedia.org/wiki/The_Alchemist_(novel)"},
  { id: "7", title: "Atomic Habits", author: "James Clear", category: "Self-help", description: "Habit building", rating: 4.9, image: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg", wiki: "https://en.wikipedia.org/wiki/Atomic_Habits" },
  { id: "8", title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", category: "Finance", description: "Money mindset", rating: 4.5, image: "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg", wiki: "https://en.wikipedia.org/wiki/Rich_Dad_Poor_Dad" },
  { id: "9", title: "The Psychology of Money", author: "Morgan Housel", category: "Finance", description: "Wealth behavior", rating: 4.7, image: "https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg", wiki: "https://en.wikipedia.org/wiki/The_Psychology_of_Money" },
  { id: "10", title: "Think and Grow Rich", author: "Napoleon Hill", category: "Self-help", description: "Success mindset", rating: 4.6, image: "https://images-na.ssl-images-amazon.com/images/I/71UypkUjStL.jpg" , wiki: "https://en.wikipedia.org/wiki/Think_and_Grow_Rich"},

  { id: "11", title: "The Martian", author: "Andy Weir", category: "Sci-Fi", description: "Survival on Mars", rating: 4.7, image: "https://images-na.ssl-images-amazon.com/images/I/91SZSW8qSsL.jpg" , wiki: "https://en.wikipedia.org/wiki/The_Martian_(Weir_novel)"},
  { id: "12", title: "Project Hail Mary", author: "Andy Weir", category: "Sci-Fi", description: "Space mission", rating: 4.8, image: "https://m.media-amazon.com/images/I/51291McCcPL._SY445_SX342_FMwebp_.jpg", wiki: "https://en.wikipedia.org/wiki/Project_Hail_Mary" },
  { id: "13", title: "The Da Vinci Code", author: "Dan Brown", category: "Thriller", description: "Mystery secrets", rating: 4.4, image: "https://images-na.ssl-images-amazon.com/images/I/91Q5dCjc2KL.jpg" , wiki: "https://en.wikipedia.org/wiki/The_Da_Vinci_Code"},
  { id: "14", title: "Angels & Demons", author: "Dan Brown", category: "Thriller", description: "Religious mystery", rating: 4.3, image: "https://m.media-amazon.com/images/I/41KEjq2S4hL._SY445_SX342_FMwebp_.jpg", wiki: "https://en.wikipedia.org/wiki/Angels_%26_Demons" },
  { id: "15", title: "Inferno", author: "Dan Brown", category: "Thriller", description: "Hidden code", rating: 4.2, image: "https://m.media-amazon.com/images/I/61+WWxErjHL._SY445_SX342_FMwebp_.jpg", wiki: "https://en.wikipedia.org/wiki/Inferno_(Brown_novel)" },

  { id: "16", title: "Game of Thrones", author: "George R.R. Martin", category: "Fantasy", description: "Westeros saga", rating: 4.9, image: "https://images-na.ssl-images-amazon.com/images/I/91dSMhdIzTL.jpg", wiki: "https://en.wikipedia.org/wiki/A_Game_of_Thrones" },
  { id: "17", title: "The Name of the Wind", author: "Patrick Rothfuss", category: "Fantasy", description: "Magic story", rating: 4.8, image: "https://m.media-amazon.com/images/I/611iKJa7a-L._SY522_.jpg" , wiki: "https://en.wikipedia.org/wiki/The_Name_of_the_Wind"},
  { id: "18", title: "Sapiens", author: "Yuval Noah Harari", category: "History", description: "Human evolution", rating: 4.7, image: "https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg", wiki: "https://en.wikipedia.org/wiki/Sapiens:_A_Brief_History_of_Humankind" },
  { id: "19", title: "Homo Deus", author: "Yuval Noah Harari", category: "History", description: "Future of humans", rating: 4.6, image: "https://m.media-amazon.com/images/I/41x9l0H2UGL._SY445_SX342_FMwebp_.jpg", wiki: "https://en.wikipedia.org/wiki/Homo_Deus:_A_Brief_History_of_Tomorrow" },
  { id: "20", title: "Educated", author: "Tara Westover", category: "Biography", description: "Life story", rating: 4.8, image: "https://images-na.ssl-images-amazon.com/images/I/81WojUxbbFL.jpg", wiki: "https://en.wikipedia.org/wiki/Educated_(book)" },

  { id: "21", title: "Becoming", author: "Michelle Obama", category: "Biography", description: "Life journey", rating: 4.7, image: "https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL.jpg" , wiki: "https://en.wikipedia.org/wiki/Becoming_(book)"},
  { id: "22", title: "Ikigai", author: "Héctor García", category: "Philosophy", description: "Japanese life meaning", rating: 4.6, image: "https://images-na.ssl-images-amazon.com/images/I/81l3rZK4lnL.jpg" , wiki: "https://en.wikipedia.org/wiki/Ikigai"},
  { id: "23", title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", category: "Self-help", description: "Life lessons", rating: 4.5, image: "https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg" , wiki: "https://en.wikipedia.org/wiki/The_Subtle_Art_of_Not_Giving_a_F*ck"},
  { id: "24", title: "The Power of Now", author: "Eckhart Tolle", category: "Spiritual", description: "Mindfulness", rating: 4.6, image: "https://images-na.ssl-images-amazon.com/images/I/71sBtM3Yi5L.jpg", wiki: "https://en.wikipedia.org/wiki/The_Power_of_Now" },
  { id: "25", title: "Deep Work", author: "Cal Newport", category: "Productivity", description: "Focus deeply", rating: 4.7, image: "https://images-na.ssl-images-amazon.com/images/I/81JJ7fyyKyS.jpg" , wiki: "https://en.wikipedia.org/wiki/Deep_Work"}
];

export default books;