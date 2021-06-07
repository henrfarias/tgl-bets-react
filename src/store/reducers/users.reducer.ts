import { createSlice } from '@reduxjs/toolkit';
import IUser from '../../Interfaces/IUser';

const initialState = [
  { name: 'Henrique', email: 'henrique@teste.com', password: '12345678' },
] as IUser[];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      console.log(action.payload);
      state.push(action.payload);
    },
  },
});

export const { registerUser } = usersSlice.actions;

export default usersSlice.reducer;
