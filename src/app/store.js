import {configureStore} from "@reduxjs/toolkit";
import booksReducer from '../routes/booksSlice';
import searchParamsReducer from '../components/SearchForm/searchParamsSlice';

export default configureStore({
  reducer: {
    searchParams: searchParamsReducer,
    books: booksReducer,
  }
})
