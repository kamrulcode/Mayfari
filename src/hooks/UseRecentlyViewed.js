// import { useEffect } from "react";
// import useLocalStorage from "./useLocalStorage";

// export default function useRecentlyViewed(product) {
//   const [history, setHistory] = useLocalStorage("recent-products", []);

//   useEffect(() => {
//     if (!product) return;

//     const filtered = history.filter((item) => item.id !== product.id);

//     const updated = [product, ...filtered].slice(0, 8);

//     setHistory(updated);
//   }, [product, history, setHistory]);

//   return [history, setHistory];
// }

import { useState } from "react";

const STORAGE_KEY = "mayfair-recently-viewed";

function getRecentlyViewed() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function useRecentlyViewed() {
  const [recentlyViewed, setRecentlyViewed] = useState(getRecentlyViewed);

  const addRecentlyViewed = (product) => {
    if (!product?.id) return;

    setRecentlyViewed((current) => {
      const filtered = current.filter((item) => item.id !== product.id);

      const updated = [product, ...filtered].slice(0, 6);

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

      return updated;
    });
  };

  const clearRecentlyViewed = () => {
    localStorage.removeItem(STORAGE_KEY);

    setRecentlyViewed([]);
  };

  return {
    recentlyViewed,
    addRecentlyViewed,
    clearRecentlyViewed,
  };
}

export default useRecentlyViewed;
