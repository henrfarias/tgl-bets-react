import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
import IBets from '../../Interfaces/IBets';
import IUser from '../../Interfaces/IUser';

const initialState = [
  {
    id: 4215412456799,
    name: 'Henrique',
    email: 'henrique@teste.com',
    password: '12345678',
    history: [],
  },
] as IUser[];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      console.log(action.payload);
      state.push(action.payload);
    },
    addGamesInHistory: (
      state,
      action: PayloadAction<{ id: number; bets: IBets[] }>
    ) => {
      const userIndex = current(state).findIndex(
        (user) => {
         return user.id === action.payload.id
        }
        );
      action.payload.bets.forEach((bet) => {
        state[userIndex].history.unshift(bet);
      });
    },
  },
});

export const { registerUser, addGamesInHistory } = usersSlice.actions;

export default usersSlice.reducer;
