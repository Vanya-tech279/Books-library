import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// fetch books (if using API)
export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async () => {
    const res = await fetch("http://localhost:5000/books");
    return res.json();
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState: {
    items: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.items.unshift(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;