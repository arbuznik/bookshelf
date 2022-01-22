import {createSlice} from "@reduxjs/toolkit"

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
    updateSearchQuery: (state, action) => {
      if (state.query !== action.payload) {
        state.query = action.payload
        state.page = 1
      }
    },
    updateSearchCategory: (state, action) => {
      if (state.category !== action.payload) {
        state.category = action.payload
        state.page = 1
      }
    },
    updateOrder: (state, action) => {
      if (state.orderBy !== action.payload) {
        state.orderBy = action.payload
        state.page = 1
      }
    },
    incrementPage: (state) => {
      state.page++
    }
  }
})

export const { updateSearchQuery, updateSearchCategory, updateOrder, incrementPage } = searchParamsSlice.actions

export const selectSearchQuery = state => state.searchParams.query
export const selectSearchCategory = state => state.searchParams.category
export const selectOrder = state => state.searchParams.orderBy
export const selectMaxResults = state => state.searchParams.maxResults
export const selectPage = state => state.searchParams.page

export default searchParamsSlice.reducer
