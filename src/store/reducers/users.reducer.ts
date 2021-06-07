import { createSlice } from '@reduxjs/toolkit';
import IUser from '../../Interfaces/IUser';

const initialState = {usersList: [] as IUser[]}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      console.log(action.payload);
      state.usersList.push(action.payload);
    }
  }
});

export const { registerUser } = usersSlice.actions;

export default usersSlice.reducer;