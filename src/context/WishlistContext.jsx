import { createContext, useEffect, useState } from "react";

function getInitialWishlist() {
  try {
    const savedWishlist = localStorage.getItem("mayfair-wishlist");

    return savedWishlist ? JSON.parse(savedWishlist) : [];
  } catch (error) {
    console.error("Failed to load wishlist:", error);

    return [];
  }
}

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(getInitialWishlist);

  useEffect(() => {
    localStorage.setItem("mayfair-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.some((item) => item.id === product.id);

      if (exists) {
        return prevWishlist;
      }

      return [...prevWishlist, product];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== productId),
    );
  };
  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.some((item) => item.id === product.id);

      if (exists) {
        return prevWishlist.filter((item) => item.id !== product.id);
      }

      return [...prevWishlist, product];
    });
  };
  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  const wishlistCount = wishlist.length;

  const clearWishlist = () => {
    setWishlist([]);
  };
  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isInWishlist,
        clearWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
