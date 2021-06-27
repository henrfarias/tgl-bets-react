import { createSlice } from '@reduxjs/toolkit';

let initialState = false;

const LoadSlice = createSlice({
  name: 'load',
  initialState,
  reducers: {
    isLoading: (state) => state = true,
    isntLoading: (state) => state = false
  }
});

export const { isLoading, isntLoading } = LoadSlice.actions;

export default LoadSlice.reducer;