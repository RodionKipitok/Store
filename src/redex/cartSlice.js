import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
   name: 'cart',
   initialState: {
      list: [],
      isLoading: false,
   },
   reducers: {
      addedProductInCart(state, action) {
         state.list.push(action.payload);
      },
      deleteProductCart(state, action) {},
   },
});

const { actions, reducer } = cartSlice;

const cartReducer = reducer;

export const { addedProductInCart, deleteProductCart } = actions;

export default cartReducer;
