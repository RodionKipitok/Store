import { createBrowserRouter } from 'react-router-dom';

import Root from '../components/App/Root';
import Home from '../pages/Home/Home';
import SingleCategory from '../components/Category/SingleCategory/SingleCategory';
import SingleProduct from '../pages/SingleProduct/SingleProduct';
import Cart from '../pages/Cart/Cart';
import ErrorPage from '../pages/Erro-page/error-page';

import { ROUTES } from '../utils/routes';
const router = createBrowserRouter([
   {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: ROUTES.HOME,
            element: <Home />,
         },
         {
            path: ROUTES.PRODUCT,
            element: <SingleProduct />,
         },
         {
            path: ROUTES.CATEGORY,
            element: <SingleCategory />,
         },
         {
            path: ROUTES.CART,
            element: <Cart />,
         },
      ],
   },
],{
   basename: '/Store'
});

export default router;
