import { createSlice } from "@reduxjs/toolkit";
import booksData from "../../data/books"; 
const initialState = booksData; 
{/***** Books Redux******/ }
const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;