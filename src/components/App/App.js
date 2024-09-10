import Header from '../Header/Header';
import AppRoutes from '../../Routes/AppRoutes';
import Sidebar from '../Sidebar/Sidebar';

import Footer from '../Footer/Footer';
import { getCategories } from '../../redex/categoriesSlice';
import { getProduct } from '../../redex/productSlise';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './App.css';

function App() {
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
            <AppRoutes />
         </div>

         <Footer />
      </div>
   );
}

export default App;
