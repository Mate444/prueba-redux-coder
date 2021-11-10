import { configureStore } from '@reduxjs/toolkit';
import friendsReducer from './reducers';

export const store = configureStore({
  reducer: {
    friendsReducer: friendsReducer,
  },
});
