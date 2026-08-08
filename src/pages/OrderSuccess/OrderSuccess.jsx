import { useState } from "react";
import "./OrderSuccess.scss";
import { Link } from "react-router-dom";

function OrderSuccess() {
  const [order] = useState(() => {
    const savedOrder = localStorage.getItem("latest-order");

    return savedOrder ? JSON.parse(savedOrder) : null;
  });

  if (!order) {
    return (
      <main className="order-success">
        <div className="success-container">
          <h1>No order found</h1>

          <Link to="/">Continue Shopping</Link>
        </div>
      </main>
    );
  }
  return (
    <main className="order-success">
      <div className="success-container">
        <div className="success-icon">✓</div>

        <h1>Order Confirmed</h1>

        <p>
          Thank you for your purchase. Your order has been placed successfully.
        </p>

        <div className="order-number">Order #{order.id}</div>
        <div className="order-total">
          <span>Order Total</span>

          <strong>${order.total}</strong>
        </div>

        <div className="success-actions">
          <Link to="/">Continue Shopping</Link>

          <Link to="/orders">Track Order</Link>
        </div>
      </div>
    </main>
  );
}

export default OrderSuccess;
