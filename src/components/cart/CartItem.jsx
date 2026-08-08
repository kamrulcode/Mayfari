import useCart from "../../hooks/useCart";
import "../../pages/Cart/Cart.scss";

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />

      <div>
        <h3>{item.title}</h3>

        <p>${item.price}</p>
      </div>

      <button onClick={() => removeFromCart(item.id)}>Remove</button>
      <div className="quantity-control">
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
          −
        </button>

        <span>{item.quantity}</span>

        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;
