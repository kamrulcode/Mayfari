import { Link } from "react-router-dom";

import useWishlist from "../../hooks/useWishlist";

import ProductCard from "../../components/product/ProductCard/ProductCard";

function Wishlist() {
  const { wishlist, clearWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <section className="wishlist-empty">
        <h1>Your Wishlist is Empty</h1>

        <p>Save your favorite candles and find them here later.</p>

        <Link to="/shop">Explore Candles</Link>
      </section>
    );
  }

  return (
    <section className="wishlist-page">
      <div className="wishlist-header">
        <h1>My Wishlist</h1>

        <button onClick={clearWishlist}>Clear Wishlist</button>
      </div>

      <div className="wishlist-grid">
        {wishlist.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Wishlist;
