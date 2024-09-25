import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const cartSlice = createSlice({
   name: 'cart',
   initialState: {
      list: [],
      isLoading: false,
   },
   reducers: {
      addToCart(state, action) {
         const id = nanoid();
         state.list.push({ ...action.payload, quantity: 1, id });
      },
      removeFromCart(state, action) {
         console.log(action);
         const {productId} = action.payload
         state.list = state.list.filter(item => item.id !== productId);


      },
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
