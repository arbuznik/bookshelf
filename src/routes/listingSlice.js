import {createSlice} from "@reduxjs/toolkit";

function getUniqueCategories(books) {
  const categories = books
    .map(book => book.volumeInfo.categories)
    .filter(val => typeof val !== 'undefined')
    .flat();
  return Array.from(new Set(categories));
}

export const listingSlice = createSlice({
  name: 'listing',
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



export const { setBooks, setOrder } = listingSlice.actions;

export const selectBooks = state => state.listing.books;
export const selectTotalBooksAmount = state => state.listing.totalBooks;
export const selectCategories = state => state.listing.categories;
export const selectOrder = state => state.listing.orderBy;

export default listingSlice.reducer;


