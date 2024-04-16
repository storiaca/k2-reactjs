import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
  },
  reducers: {
    saveProductsAction: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { saveProductsAction } = productSlice.actions;
export default productSlice.reducer;
