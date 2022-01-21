import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../app/api";

const getUniqueCategories = books => {
  const categories = books
    .map(book => book.volumeInfo.categories)
    .filter(val => typeof val !== 'undefined')
    .flat();
  return Array.from(new Set(categories));
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (config) => {
  const response = await api.getBooks(config);
  console.log(response.data);
  return response.data;
})

export const fetchBook = createAsyncThunk('book/fetchBook', async ({bookId}) => {
  const response = await api.getBook(bookId);
  console.log(response.data);
  return response.data;
})

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    item: {},
    items: [],
    totalItems: 0,
    categories: ['All'],
    status: 'idle',
    error: null,
  },
  reducers: {
    loadBooks: (state, action) => {
      state.items += action.payload.item;
      state.categories = state.categories.concat(getUniqueCategories(action.payload.items));
    },
    loadBook: (state, action) => {
      state.item = action.payload.item;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.items;
        state.totalItems = action.payload.totalItems;
        state.categories = ['All'].concat(getUniqueCategories(action.payload.items));
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchBook.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.item = action.payload;
      })
      .addCase(fetchBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
})

export const {loadBooks, loadBook} = booksSlice.actions;

export const selectItem = state => state.books.item;
export const selectItems = state => state.books.items;
export const selectTotalItems = state => state.books.totalItems;
export const selectCategories = state => state.books.categories;

export default booksSlice.reducer;


