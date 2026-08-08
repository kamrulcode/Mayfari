import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }) {
  function getInitialCart() {
    try {
      const savedCart = localStorage.getItem("mayfair-cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Failed to load cart:", error);
      return [];
    }
  }

  const [cart, setCart] = useState(getInitialCart);

  useEffect(() => {
    localStorage.setItem("mayfair-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item,
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity,
        },
      ];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (productId, quantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: Math.max(1, quantity),
            }
          : item,
      ),
    );
  };
  //   const increaseQuantity = (id) => {
  //     setCart((prev) =>
  //       prev.map((item) =>
  //         item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
  //       ),
  //     );
  //   };

  //   const decreaseQuantity = (id) => {
  //     setCart((prev) =>
  //       prev
  //         .map((item) =>
  //           item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
  //         )
  //         .filter((item) => item.quantity > 0),
  //     );
  //   };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const isEmpty = cart.length === 0;

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalItems,
        subtotal,
        isEmpty,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
