import { configureStore } from '@reduxjs/toolkit';
import typeProductReducer from './typeProductSlice';

const store = configureStore({
  reducer: {
    typeProduct: typeProductReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
