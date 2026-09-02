import { FiHeart, FiStar } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

import useCart from "../../hooks/useCart";
import Button from "../../components/common/Button/Button";

import QuantitySelector from "./QuantitySelector";
import "./Product.scss";
import useWishlist from "../../hooks/useWishlist";

function ProductInfo({ product }) {
  const { toggleWishlist, isInWishlist } = useWishlist();

  const { addToCart } = useCart();
  return (
    <div className="product-info">
      <div className="product-rating">
        {[...Array(product.rating)].map((_, index) => (
          <FiStar key={index} />
        ))}

        <span>({product.rating}.0)</span>
      </div>

      <h1>{product.name}</h1>

      <h2>${product.price}</h2>

      <p>{product.description}</p>

      <div className="product-details">
        <p>{product.wax}</p>
        <p>{product.burnTime}</p>
        <p>{product.scent}</p>
      </div>

      <QuantitySelector />

      <div className="actions">
        <button
          type="button"
          className="wishlist"
          onClick={() => toggleWishlist(product)}
          aria-label={
            isInWishlist(product.id)
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
        >
          {isInWishlist(product.id) ? <FaHeart /> : <FiHeart />}
        </button>

        <Button onClick={() => addToCart(product)}>Add To Cart</Button>
      </div>
    </div>
  );
}

export default ProductInfo;
