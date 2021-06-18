import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IUser from '../../Interfaces/IUser';

const initialState = {} as IUser;

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogged: (state, action: PayloadAction<IUser>) => {
      return state = action.payload;
    }
  },
});

export const { userLogged } = usersSlice.actions;

export default usersSlice.reducer;
