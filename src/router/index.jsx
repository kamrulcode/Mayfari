import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import Wishlist from "../pages/Wishlist/Wishlist";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Product from "../pages/Product/Product";
import Checkout from "../pages/Checkout/Checkout";
import OrderSuccess from "../pages/OrderSuccess/OrderSuccess";
import OrderTracking from "../pages/OrderTracking/OrderTracking";
import Account from "../pages/Account.jsx/Account";
import MyOrders from "../pages/Account.jsx/MyOrders";
import Addresses from "../pages/Account.jsx/Addresses/Addresses";
import Signup from "../pages/Signup/Signup";
import ProtectedRoute from "../components/Auth/ProtectedRoute";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "product/:slug",
        element: <Product />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "order-success",
        element: <OrderSuccess />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "track-order",
        element: <OrderTracking />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "account",
            element: <Account />,
          },
          {
            path: "account/orders",
            element: <MyOrders />,
          },
          {
            path: "account/addresses",
            element: <Addresses />,
          },
        ],
      },

      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
