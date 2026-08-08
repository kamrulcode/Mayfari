import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/main.scss";
import { WishlistProvider } from "./context/WishlistContext.jsx";

import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import { CartProvider } from "./context/CartProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WishlistProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </WishlistProvider>
  </StrictMode>,
);
