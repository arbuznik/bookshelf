import {configureStore} from "@reduxjs/toolkit";
import listingBooksReducer from '../routes/listingBooksSlice';
import searchParamsReducer from '../components/SearchForm/searchFormSlice';

export default configureStore({
  reducer: {
    searchParams: searchParamsReducer,
    listingBooks: listingBooksReducer,
  }
})
