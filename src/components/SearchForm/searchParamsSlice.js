import {createSlice} from "@reduxjs/toolkit";

export const searchParamsSlice = createSlice({
  name: 'searchParams',
  initialState: {
    query: 'monty python',
    category: '',
    orderBy: 'Relevance',
    maxResults: 30,
    page: 1,
  },
  reducers: {
    //TODO: get rid of setters. components should not be writing to state
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
    setSearchCategory: (state, action) => {
      state.category = action.payload;
    },
    setOrder: (state, action) => {
      state.orderBy = action.payload;
    }
  }
})

export const { setSearchQuery, setSearchCategory, setOrder } = searchParamsSlice.actions;

export const selectSearchQuery = state => state.searchParams.query;
export const selectSearchCategory = state => state.searchParams.category;
export const selectOrder = state => state.searchParams.orderBy;
export const selectMaxResults = state => state.searchParams.maxResults;
export const selectPage = state => state.searchParams.page;

export default searchParamsSlice.reducer;
