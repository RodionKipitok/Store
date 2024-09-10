import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';

import SingleCategory from '../components/Categories/SingleCategory';

import { ROUTES } from '../utils/routes';

const AppRoutes = () => {
   return (
      <Routes>
         <Route index element={<Home />} />
         <Route path={ROUTES.PRODUCT} element={<div>SingleProduct</div>} />
         <Route path={ROUTES.PROFILE} element={<div>Profile</div>} />
         <Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
         <Route path={ROUTES.CART} element={<div>Cart</div>} />
      </Routes>
   );
};

export default AppRoutes;
