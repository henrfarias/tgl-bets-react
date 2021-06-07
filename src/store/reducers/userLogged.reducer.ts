import { createSlice } from '@reduxjs/toolkit';

const initialState = {name: '', logged: false};

const userLoggedSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action) => {
      state.logged = true;
      state.name = action.payload;
      console.log(state.name, state.logged);
    },
    logout: (state) => {
      state = initialState;
      console.log(state.name, state.logged);
    }
  }
});

export const { login, logout } = userLoggedSlice.actions;

export default userLoggedSlice.reducer;