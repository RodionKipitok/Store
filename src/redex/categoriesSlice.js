import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

export const getCategories = createAsyncThunk(
   'categories/getCategories',
   async (_, thunkAPI) => {
      try {
         const res = await axios(`${BASE_URL}products/categories`);

         return res.data;
      } catch (error) {
         console.log(error);
      }
   },
);

const categoriesSlice = createSlice({
   name: 'categories',
   initialState: {
      list: [],
      isLoading: false,
   },

   extraReducers: builder => {
      builder.addCase(getCategories.pending, state => {
         state.isLoading = true;
      });
      builder.addCase(getCategories.fulfilled, (state, action) => {
         state.list = action.payload.slice(0, 5);
         state.isLoading = false;
      });
      builder.addCase(getCategories.rejected, state => {
         state.isLoading = false;
      });
   },
});

export default categoriesSlice.reducer;
