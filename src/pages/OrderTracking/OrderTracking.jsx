import { useState } from "react";
import { Link } from "react-router-dom";
import "./OrderTracking.scss";

function OrderTracking() {
  const [order] = useState(() => {
    const savedOrder = localStorage.getItem("latest-order");

    return savedOrder ? JSON.parse(savedOrder) : null;
  });

  if (!order) {
    return (
      <main className="order-tracking">
        <div className="tracking-container">
          <h1>No Order Found</h1>
          <p>We couldn't find an order to track.</p>

          <Link to="/">Continue Shopping</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="order-tracking">
      <div className="tracking-container">
        <span className="eyebrow">MAYFAIR CANDLES</span>

        <h1>Track Your Order</h1>

        <div className="order-info">
          <p>
            Order Number:
            <strong> #{order.id}</strong>
          </p>
        </div>

        <div className="tracking-status">
          <div className="tracking-step active">
            <span className="step-number">✓</span>

            <div>
              <h3>Order Confirmed</h3>
              <p>Your order has been received.</p>
            </div>
          </div>

          <div className="tracking-line"></div>

          <div className="tracking-step active">
            <span className="step-number">2</span>

            <div>
              <h3>Preparing</h3>
              <p>Your candles are being prepared.</p>
            </div>
          </div>

          <div className="tracking-line"></div>

          <div className="tracking-step">
            <span className="step-number">3</span>

            <div>
              <h3>Shipped</h3>
              <p>Your order will be shipped soon.</p>
            </div>
          </div>

          <div className="tracking-line"></div>

          <div className="tracking-step">
            <span className="step-number">4</span>

            <div>
              <h3>Delivered</h3>
              <p>Your Mayfair candles arrive.</p>
            </div>
          </div>
        </div>

        <div className="success-actions">
          <Link to="/track-order">Track Your Order</Link>

          <Link to="/">Continue Shopping</Link>
        </div>
      </div>
    </main>
  );
}

export default OrderTracking;
