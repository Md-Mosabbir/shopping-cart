//React routing

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

//Components
import NavigationBar from './components/NavigationBar'
import ShopLayout from './components/ShopLayout'

//Pages
import Home from './pages/Home'
import Shop, { shoppingLoader } from './pages/Shop'
import ProductDetails, { itemDetailsLoader } from './pages/ProductDetails'

// Routers layout

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavigationBar />}>
      <Route index element={<Home />} />
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

export default function App() {
  return <RouterProvider router={router} />
}
