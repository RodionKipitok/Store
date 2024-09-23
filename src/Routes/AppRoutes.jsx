import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';

import SingleCategory from '../components/Category/SingleCategory/SingleCategory';
import SingleProduct from '../pages/SingleProduct/SingleProduct';
import Cart from '../pages/Cart/Cart';

import { ROUTES } from '../utils/routes';

const AppRoutes = () => {
   return (
      <Routes>
         <Route index element={<Home />} />
         <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
         <Route path={ROUTES.PROFILE} element={<div>Profile</div>} />
         <Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
         <Route path={ROUTES.CART} element={<Cart />} />
      </Routes>
   );
};

export default AppRoutes;
