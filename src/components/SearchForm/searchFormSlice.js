import {createSlice} from "@reduxjs/toolkit";

export const searchFormSlice = createSlice({
  name: 'searchParams',
  initialState: {
    query: '',
    category: '',
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
    setSearchCategory: (state, action) => {
      state.category = action.payload;
    }
  }
})

export const { setSearchQuery, setSearchCategory } = searchFormSlice.actions;

export const selectSearchQuery = state => state.searchParams.query;
export const selectSearchCategory = state => state.searchParams.category;

export default searchFormSlice.reducer;
