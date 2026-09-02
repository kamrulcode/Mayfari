import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/main.scss";
import { WishlistProvider } from "./context/WishlistContext.jsx";

import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import { CartProvider } from "./context/CartProvider.jsx";
import AuthProvider from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WishlistProvider>
      <CartProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </CartProvider>
    </WishlistProvider>
  </StrictMode>,
);
