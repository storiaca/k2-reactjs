import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    currentCategory: 'allProducts',
  },
  reducers: {
    saveProductsAction: (state, action) => {
      state.products = action.payload;
    },
    setCurrentCategoryAction: (state, action) => {
      state.currentCategory = action.payload;
    },
  },
});

export const { saveProductsAction, setCurrentCategoryAction } =
  productSlice.actions;
export default productSlice.reducer;
