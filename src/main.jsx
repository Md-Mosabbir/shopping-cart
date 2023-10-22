import React, { useState } from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'

import Root from './components/Root.jsx'
import Shop, { shoppingLoader } from './components/Shop'

import ProductDetails, { itemDetailsLoader } from './components/productDetails'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import App from './App'
import ShopLayout from './components/ShopLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<App />} />
      <Route path="shop" element={<ShopLayout />}>
        <Route index element={<Shop />} loader={shoppingLoader} />
        <Route
          path=":id"
          element={<ProductDetails />}
          loader={itemDetailsLoader}
        />
      </Route>
    </Route>,
  ),
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
