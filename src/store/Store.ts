import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './slices/AuthSlice';
import ProductReducer from './slices/ProductSlice';

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    products: ProductReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
