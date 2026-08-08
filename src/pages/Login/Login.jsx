import ProductCard from "../../components/product/ProductCard/ProductCard";
import useWishlist from "../../hooks/useWishlist";

function Wishlist() {
  const { wishlist } = useWishlist();
  const { removeFromWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <section className="empty">
        <h2>Your wishlist is empty</h2>

        <p>Save products you love by tapping the heart icon.</p>
      </section>
    );
  }

  return (
    <section className="wishlist-page">
      <h1>Wishlist</h1>

      <div className="grid">
        {wishlist.map((product) => (
          <>
            <ProductCard key={product.id} product={product} />
            <button onClick={() => removeFromWishlist(product.id)}>
              Remove
            </button>
          </>
        ))}
      </div>
    </section>
  );
}

export default Wishlist;
