import {configureStore} from "@reduxjs/toolkit";
import listingReducer from '../routes/listingSlice';
import searchParamsReducer from '../components/SearchForm/searchFormSlice';
import statusReducer from './statusSlice';

export default configureStore({
  reducer: {
    searchParams: searchParamsReducer,
    listing: listingReducer,
    status: statusReducer,
  }
})
