import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    saveCartAction: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { saveCartAction } = cartSlice.actions;
export default cartSlice.reducer;
