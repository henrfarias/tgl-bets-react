import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IUser from '../../Interfaces/IUser';

const initialState = {} as IUser;

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoggedIn: (state, action: PayloadAction<IUser>) => {
      return state = {...action.payload};
    },
    userLoggedOut: (state) => {
      return state = initialState;
    }
  },
});

export const { userLoggedIn, userLoggedOut } = usersSlice.actions;

export default usersSlice.reducer;
