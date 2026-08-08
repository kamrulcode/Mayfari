import { useState } from "react";
import "./Product.scss";

function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="quantity">
      <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>−</button>

      <span>{quantity}</span>

      <button onClick={() => setQuantity((q) => q + 1)}>+</button>
    </div>
  );
}

export default QuantitySelector;
