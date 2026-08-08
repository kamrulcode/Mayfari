import { FiHeart, FiStar } from "react-icons/fi";

import QuantitySelector from "./QuantitySelector";
import "./Product.scss";

function ProductInfo({ product }) {
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
        <button className="wishlist">
          <FiHeart />
        </button>

        <button className="cart">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductInfo;
