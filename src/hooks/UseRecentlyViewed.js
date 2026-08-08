import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useRecentlyViewed(product) {
  const [history, setHistory] = useLocalStorage("recent-products", []);

  useEffect(() => {
    if (!product) return;

    const filtered = history.filter((item) => item.id !== product.id);

    const updated = [product, ...filtered].slice(0, 8);

    setHistory(updated);
  }, [product, history, setHistory]);

  return [history, setHistory];
}
