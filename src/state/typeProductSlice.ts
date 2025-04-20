import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  type: number;
}

const initialState: CounterState = {
  type: 0,
};

const typeProductSlice = createSlice({
  name: 'TypeProduct',
  initialState,
  reducers: {
    setTypeProduct: (state, action: PayloadAction<number>) => {
      state.type = action.payload;
    },
  },
});

export const { setTypeProduct } = typeProductSlice.actions;
export default typeProductSlice.reducer;
