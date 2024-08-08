import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './categoriesSlice';
import productSlise from './productSlise';



export const store = configureStore({
   reducer: {
      categories:  categoriesSlice,
      products: productSlise,
   },
});

