import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './AddSlice';

export const store = configureStore({
  reducer: {

    task:taskReducer
  },
})