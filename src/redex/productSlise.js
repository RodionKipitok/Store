import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

export const getProduct = createAsyncThunk(
   'products/getProducts',
   async (_, thunkAPI) => {
      try {
         const res = await axios(`${BASE_URL}products`);

         return res.data;
      } catch (error) {
         console.log(error);
      }
   },
);

const productsSlice = createSlice({
   name: 'products',
   initialState: {
      list: [],
      filtered: [],
      related: [],
      isLoading: false,
   },
   extraReducers: builder => {
      builder.addCase(getProduct.pending, state => {
         state.isLoading = true;
      });
      builder.addCase(getProduct.fulfilled, (state, action) => {
         state.list = action.payload;
         state.isLoading = false;
      });
      builder.addCase(getProduct.rejected, state => {
         state.isLoading = false;
      });
   },
});

export default productsSlice.reducer;
