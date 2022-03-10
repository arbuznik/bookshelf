import {configureStore} from "@reduxjs/toolkit"
import booksReducer from '../routes/Books/booksSlice'
import searchParamsReducer from '../components/SearchForm/searchParamsSlice'

export default configureStore({
  reducer: {
    searchParams: searchParamsReducer,
    books: booksReducer,
  }
})

// A4
// -847Z7V
// -XTS633
// -KBHPF
// -FGBSZ
// -S9YTL
// -6DKLZ