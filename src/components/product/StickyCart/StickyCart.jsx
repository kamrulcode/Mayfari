import "./StickyCart.scss";

import { useEffect, useState } from "react";

import QuantitySelector from "../../../pages/Product/QuantitySelector";
import Button from "../../common/Button/Button";

function StickyCart({ product }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const trigger = 500;

      if (window.scrollY > trigger) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const addToCart = (product) => {
    console.log(product);
  };
  return (
    <div className={`sticky-cart ${visible ? "show" : ""}`}>
      <div className="sticky-cart__content">
        <div className="sticky-cart__product">
          <span>Luxury Candle</span>

          <h4>Vanilla Dream</h4>
          <p className="stock">Only 8 left in stock</p>
        </div>

        <div className="sticky-cart__price">$38</div>

        <QuantitySelector />
        <div className="shipping">🚚 Free Shipping</div>

        <Button onClick={() => addToCart(product)}>Add To Cart</Button>
      </div>
    </div>
  );
}

export default StickyCart;
