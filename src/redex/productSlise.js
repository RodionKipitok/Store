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

export const getCategoryProducts = createAsyncThunk(
   'category/getCategory',
   async (nameCategory, thunkAPI) => {
      // console.log(nameCategory);
      try {
         const res = await axios(
            `${BASE_URL}products/category/${nameCategory}`,
         );
         // console.log(res.date);
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
      like: [],
      filter: {
         title: '',
         price_min: '',
         price_max: '',
      },
   },
   reducers: {
      filterByPrice: (state, { payload }) => {
         state.filtered = state.list.filter(({ price }) => price < payload);
      },

      filterValueCategory: (state, { payload }) => {
         state.filter = payload;
      },
      likeProduct: (state, action) => {
         console.log(action);
         state.like.push(action.payload);
      },
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
      builder.addCase(getCategoryProducts.pending, state => {
         state.isLoading = true;
      });
      builder.addCase(getCategoryProducts.fulfilled, (state, action) => {
         state.list = action.payload;
         state.isLoading = false;
      });
      builder.addCase(getCategoryProducts.rejected, state => {
         state.isLoading = false;
      });
   },
});

export const { filterByPrice, filterValueCategory, likeProduct } =
   productsSlice.actions;

export default productsSlice.reducer;
