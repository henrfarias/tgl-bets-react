import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './reducers/users.reducer';
import gamesReducer from './reducers/games.reducer';

const store = configureStore({
  reducer: {
    user: usersReducer,
    games: gamesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
