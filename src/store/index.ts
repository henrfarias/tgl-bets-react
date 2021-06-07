import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './reducers/users.reducer';
import userLoggedReducer from './reducers/userLogged.reducer';
import gamesReducer from './reducers/games.reducer';

const store = configureStore({
  reducer: {
    users: usersReducer,
    logged: userLoggedReducer,
    games: gamesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
