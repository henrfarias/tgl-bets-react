import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './reducers/users.reducer';
import userLoggedReducer from './reducers/userLogged.reducer';

const store = configureStore({
  reducer: {
    users: usersReducer,
    logged: userLoggedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
