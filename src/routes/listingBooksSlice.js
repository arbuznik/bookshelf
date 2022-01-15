import {createSlice} from "@reduxjs/toolkit";

function getUniqueCategories(books) {
  const categories = books
    .map(book => book.volumeInfo.categories)
    .filter(val => typeof val !== 'undefined')
    .flat();
  return Array.from(new Set(categories));
}

export const listingBooksSlice = createSlice({
  name: 'listingBooks',
  initialState: {
    books: [],
    totalBooks: 0,
    categories: ['All'],
    orderBy: 'Relevance',
  },
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload.items;
      state.totalBooks = action.payload.totalItems;
      state.categories = ['All'].concat(getUniqueCategories(action.payload.items));
    },
    setOrder: (state, action) => {
      state.orderBy = action.payload;
    }
  }
})



export const { setBooks, setOrder } = listingBooksSlice.actions;

export const selectBooks = state => state.listingBooks.books;
export const selectTotalBooksAmount = state => state.listingBooks.totalBooks;
export const selectCategories = state => state.listingBooks.categories;
export const selectOrder = state => state.listingBooks.orderBy;

export default listingBooksSlice.reducer;


