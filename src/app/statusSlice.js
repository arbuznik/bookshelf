import {createSlice} from "@reduxjs/toolkit";

export const statusSlice = createSlice({
  name: 'status',
  initialState: {
    isLoading: false
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    }
  }
})

export const { setIsLoading } = statusSlice.actions;

export const selectIsLoading = state => state.status.isLoading;

export default statusSlice.reducer;