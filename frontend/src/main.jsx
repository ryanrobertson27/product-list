import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import App from './App'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import NewProduct from './pages/NewProduct';
import Product from './pages/Product';
import './index.css';
import { store } from './store';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="/new-product">
        <Route index element={<NewProduct />} />
      </Route>
      <Route path="/products/:productId" element={<Product />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
