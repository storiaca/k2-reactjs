import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    totalProduct: 0,
    totalPrice: 0,
  },
  reducers: {
    saveInCartAction: (state, action) => {
      console.log(action.payload);
      let copyArray = [...state.cart];
      // 1. Da li imamo product u korpi?
      let findIndex = null;
      // ovde proveravam da li postoji u korpi?
      copyArray.find((item, index) => {
        if (item.id === action.payload.id) {
          findIndex = index;
          return;
        }
      });

      // 2. dodaj novi proizvod ili uvecaj isti
      if (findIndex === null) {
        copyArray.push({ ...action.payload, count: 1 });
        state.totalProduct++;
      } else {
        copyArray[findIndex].count++;
      }

      // 3. if statement
      state.cart = copyArray;
    },
  },
});

export const { saveInCartAction } = cartSlice.actions;
export default cartSlice.reducer;
