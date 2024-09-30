import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/AppRoutes';
import { Provider } from 'react-redux';
import { store } from './redex/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
      <RouterProvider basename="/Store" router={router}></RouterProvider>
   </Provider>,
);
