import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <main className="cart-page empty-cart">
      <h1>Your Cart is Empty</h1>

      <p>Looks like you haven't added anything yet.</p>

      <Link to="/shop">Continue Shopping</Link>
    </main>
  );
}

export default EmptyCart;
