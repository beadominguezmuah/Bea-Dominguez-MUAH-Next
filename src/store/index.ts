import { configureStore } from '@reduxjs/toolkit';
import dataApiReducer from './dataApi/dataApiSlice';

export const store = configureStore({
  reducer: {
    dataApi: dataApiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;