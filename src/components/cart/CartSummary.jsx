import { calculateCart } from "../../utils/calculateCart";
import useCart from "../../hooks/useCart";

function CartSummary() {
  const { subtotal } = useCart();
  const { shipping, tax, total } = calculateCart(subtotal);

  const summary = [
    { label: "Subtotal", value: subtotal },
    { label: "Shipping", value: shipping === 0 ? "FREE" : `$${shipping}` },
    { label: "Tax", value: tax },
  ];
  return (
    <div>
      {summary.map((item) => (
        <div key={item.label} className="summary-row">
          <span>{item.label}</span>
          <span>${item.value}</span>
        </div>
      ))}

      <div className="summary-total">
        <span>Total</span>
        <span>${total}</span>
      </div>
    </div>
  );
}

export default CartSummary;
