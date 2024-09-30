import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

import Footer from '../Footer/Footer';
import { getCategories } from '../../redex/categoriesSlice';
import { getProduct } from '../../redex/productSlise';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './Root.css';

function Root() {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getCategories());
      dispatch(getProduct());
   }, [dispatch]);

   return (
      <div className="app">
         <Header />
         <div className="container">
            <Sidebar />
            <Outlet />
         </div>

         <Footer />
      </div>
   );
}

export default Root;
