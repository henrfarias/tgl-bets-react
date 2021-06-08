import { createSlice } from '@reduxjs/toolkit';

const initialState = {name: '', logged: false};

const userLoggedSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action) => {
      state.logged = true;
      state.name = action.payload;
      localStorage.setItem('logged', JSON.stringify(state));
    },
    logout: (state) => {
      state = initialState;
      localStorage.setItem('logged', JSON.stringify(state));
    }
  }
});

export const { login, logout } = userLoggedSlice.actions;

export default userLoggedSlice.reducer;