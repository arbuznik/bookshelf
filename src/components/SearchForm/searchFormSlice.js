import {createSlice} from "@reduxjs/toolkit";

export const searchFormSlice = createSlice({
  name: 'searchParams',
  initialState: {
    query: '',
    category: '',
    orderBy: 'Relevance',
  },
  reducers: {
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

export const { setSearchQuery, setSearchCategory, setOrder } = searchFormSlice.actions;

export const selectSearchQuery = state => state.searchParams.query;
export const selectSearchCategory = state => state.searchParams.category;
export const selectOrder = state => state.searchParams.orderBy;

export default searchFormSlice.reducer;
