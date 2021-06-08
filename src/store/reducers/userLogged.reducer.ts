import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {id: 0 , name: '', logged: false};

const userLoggedSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{id: number, name: string}>) => {
      state.logged = true;
      state.name = action.payload.name;
      state.id = action.payload.id;
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