import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
   name: 'cart',
   initialState: {
      list: [],
      isLoading: false,
   },
   reducers: {
      addToCart(state, action) {
         state.list.push({ ...action.payload, quantity: 1 });
      },
      removeFromCart(state, action) {},
      changeQuantity(state, action) {
         const { productId, newQuantity } = action.payload;
         const itemIndex = state.list.findIndex(item => item.id === productId);
         if (itemIndex !== -1) {
            state.list[itemIndex].quantity = newQuantity;
         }
      },
   },
});

const { actions, reducer } = cartSlice;

const cartReducer = reducer;

export const { addToCart, removeFromCart, changeQuantity } = actions;

export default cartReducer;
