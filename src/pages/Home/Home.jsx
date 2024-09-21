import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';

import { filterByPrice } from '../../redex/productSlise';

import Poster from '..//../components/Poster/Poster';
import Products from '..//../components/Products/Products';
import Categories from '..//../components/Categories/Categories';



const Home = () => {
   const dispatch = useDispatch();

   const products = useSelector(state => state.products);
   const { list, filtered } = products;

   const categories = useSelector(state => state.categories.list);
   // console.log(categories);
   useEffect(() => {
      if (!list.length) {
         return;
      }

      dispatch(filterByPrice(100));
   }, [dispatch, list.length]);

   return (
      <>
         <Poster />
         <Products products={list} amount={5} title="Trending" />
         {/* <Categories products={categories} amount={5} title="Worth seeing" />
         <Products products={filtered} amount={5} title="Less than 100$" /> */}
      </>
   );
};

export default Home;
