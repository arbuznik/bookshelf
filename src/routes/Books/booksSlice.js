import {createAsyncThunk, createSlice, nanoid} from "@reduxjs/toolkit"
import {api} from "../../app/api"

const getUniqueCategories = books => {
  const categories = books
    .map(book => book.volumeInfo.categories)
    .filter(val => typeof val !== 'undefined')
    .flat()
  return Array.from(new Set(categories))
}

export const fetchBooks = createAsyncThunk('books/fetchBooks', async ({query, category, order, maxResults, page}, {getState}) => {
  const state = getState()

  const searchQuery = query.replace(/\s+/g, '+')
  const searchCategory = category && category !== 'All' ? `+subject:'${category}'` : ''
  const startIndex = (page * maxResults) - maxResults
  const searchParams = `&startIndex=${startIndex}&maxResults=${maxResults}&orderBy=${order}`

  const path = `?q=` + searchQuery + searchCategory + searchParams

  const response = await api(path)

  // could be same books in response, adding hash to ensure id is unique
  response.data.items.forEach(item => item.id += nanoid())

  console.log(response.data)
  return {books: response.data, page: state.searchParams.page}
})

export const fetchBook = createAsyncThunk('book/fetchBook', async ({bookId}) => {
  const path = `/` + bookId

  const response = await api(path)
  console.log(response.data)
  return response.data
})

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    item: {},
    items: [],
    totalItems: 0,
    categories: ['All'],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded'

        const {books, page} = action.payload
        state.totalItems = books.totalItems

        if (!books.items) return

        if (page === 1) {
          state.items = books.items
          state.categories = ['All'].concat(getUniqueCategories(books.items))
        } else {
          state.items = state.items.concat(books.items)

          const newCategories = getUniqueCategories(books.items)
          state.categories = state.categories.concat(newCategories.filter(category => {
            return !state.categories.includes(category)
          }))
        }
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchBook.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchBook.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.item = action.payload
      })
      .addCase(fetchBook.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const selectItem = state => state.books.item
export const selectItems = state => state.books.items
export const selectTotalItems = state => state.books.totalItems
export const selectCategories = state => state.books.categories
export const selectStatus = state => state.books.status
export const selectError = state => state.books.error

export default booksSlice.reducer


