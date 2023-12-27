import { configureStore } from '@reduxjs/toolkit';
import typeProductReducer from './typeProductSlice';

export default configureStore({
  reducer: {
    typeProduct: typeProductReducer,
  },
});
