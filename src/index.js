import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from '../src/components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redex/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
      <BrowserRouter basename="/Store">
         <App />
      </BrowserRouter>
   </Provider>,
);
