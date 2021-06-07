import { createSlice } from '@reduxjs/toolkit';
import IGames from '../../Interfaces/IGame';

let initialState = [] as IGames[] ; 

const GamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    loadGames: (state, action) => {
      action.payload.forEach((game: IGames) => {
        state.push(game);
      })
      console.log(state);
    }
  }
});

export const { loadGames } = GamesSlice.actions;

export default GamesSlice.reducer;