import "./ProductCard.scss";

import { FiShoppingBag, FiStar, FiHeart } from "react-icons/fi";
import { useRef } from "react";
import { gsap } from "gsap";

import { Link } from "react-router-dom";
import useWishlist from "../../../hooks/useWishlist";

function ProductCard({ product, onRemove }) {
  console.log("ProductCard product:", product);
  console.log("ProductCardslug:", product.slug);
  const cardRef = useRef();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const wishlistActive = isInWishlist(product.id);

  const move = (e) => {
    const card = cardRef.current;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 12;

    const rotateX = (y / rect.height - 0.5) * -12;

    gsap.to(card, {
      rotateX,

      rotateY,

      transformPerspective: 900,

      duration: 0.5,
    });
  };
  const leave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,

      rotateY: 0,

      duration: 0.5,
    });
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={move}
      onMouseLeave={leave}
      className="product-card"
    >
      {/* product image */}
      <div className="product-image">
        <span className="badge">NEW</span>
        <Link to={`/product/${product.slug}`}>
          <img className="main-image" src={product.image} alt={product.name} />
          <img className="hover-image" src={product.hoverImage} alt="" />
        </Link>
        <button
          className="quick-view"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          Quick View
        </button>
        {/* <button
            className="wishlist-btn"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();

              toggleWishlist(product);
            }}
          >
            {isWishlisted(product.id) ? <FaHeart /> : <FiHeart />}
          </button> */}
        <button
          type="button"
          className={`wishlist-btn ${wishlistActive ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
        >
          <FiHeart size={20} />
        </button>
      </div>

      {/* product information */}
      <div className="product-info">
        <div className="rating">
          {[...Array(product.rating)].map((_, i) => (
            <FiStar key={i} />
          ))}
        </div>

        <Link to={`/product/${product.slug}`} className="product-name-link">
          <h3>{product.name}</h3>
        </Link>

        <div className="price">
          <span>$52</span>

          <strong>${product.price}</strong>
        </div>
        <button
          className="cart-btn"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            // addToCart(product)
          }}
        >
          <FiShoppingBag />
          <span>Add to Cart</span>
        </button>
      </div>

      {onRemove && (
        <button className="remove" onClick={() => onRemove(product.id)}>
          ×
        </button>
      )}
    </article>
  );
}

export default ProductCard;
