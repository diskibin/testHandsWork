import { configureStore } from '@reduxjs/toolkit';
import { shiftsApi } from '../services/api';

export const store = configureStore({
  reducer: {
    [shiftsApi.reducerPath]: shiftsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shiftsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
