import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../slices/GetSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
