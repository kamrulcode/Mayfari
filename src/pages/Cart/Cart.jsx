import useCart from "../../hooks/useCart";

import CartItem from "../../components/Cart/CartItem";

import CartSummary from "../../components/Cart/CartSummary";
import EmptyCart from "../../components/Cart/EmptyCart";

function Cart() {
  const { cart, isEmpty } = useCart();

  if (isEmpty) {
    return <EmptyCart />;
  }

  return (
    <section className="cart-page">
      <div className="cart-items">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <CartSummary />
    </section>
  );
}

export default Cart;
