import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './categoriesSlice';
import productSlise from './productSlise';
import cartReducer from './cartSlice';



export const store = configureStore({
   reducer: {
      categories:  categoriesSlice,
      products: productSlise,
      cart: cartReducer,
   },
});

