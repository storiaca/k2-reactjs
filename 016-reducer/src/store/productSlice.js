import { createSlice } from "@reduxjs/toolkit";
// 1. CREATE SLICE
const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    products: [],
    info: "",
    singleProduct: {},
  },
  reducers: {
    handleAllProductAction: (state, action) => {
      console.log(action.payload);
      state.info = action.payload;
    },
    handleSingleProductAction: (state, action) => {
      console.log(action.payload);
      let data = action.payload;
      state.singleProduct = data;
    },
  },
});

export const { handleAllProductAction, handleSingleProductAction } =
  productSlice.actions;
export default productSlice.reducer;
