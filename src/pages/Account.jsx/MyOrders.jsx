import { useState } from "react";
import { Link } from "react-router-dom";
import "./MyOrders.scss";

function MyOrders() {
  const [order] = useState(() => {
    const savedOrder = localStorage.getItem("latest-order");

    return savedOrder ? JSON.parse(savedOrder) : null;
  });

  return (
    <main className="my-orders">
      <div className="orders-container">
        <div className="orders-header">
          <span>MY ACCOUNT</span>
          <h1>My Orders</h1>
          <p>View your recent purchases and track your Mayfair orders.</p>
        </div>

        {!order ? (
          <div className="orders-empty">
            <span>NO ORDERS</span>

            <h2>Your order history is empty.</h2>

            <p>Once you place an order, it will appear here.</p>

            <Link to="/">Start Shopping</Link>
          </div>
        ) : (
          <div className="orders-list">
            <article className="order-card">
              <div className="order-card-header">
                <div>
                  <span>ORDER NUMBER</span>
                  <h3>#{order.id}</h3>
                </div>

                <div>
                  <span>DATE</span>
                  <p>{new Date(order.date).toLocaleDateString()}</p>
                </div>

                <div>
                  <span>TOTAL</span>
                  <p>${order.total}</p>
                </div>
              </div>

              <div className="order-card-body">
                <div className="order-products">
                  {order.items?.map((item) => (
                    <div className="order-product" key={item.id}>
                      <img src={item.image} alt={item.name} />

                      <div>
                        <h4>{item.name}</h4>

                        <p>Quantity: {item.quantity}</p>

                        <p>${item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="order-status">
                  <span className="status-label">STATUS</span>

                  <strong>Confirmed</strong>

                  <Link to="/track-order">Track Order →</Link>
                </div>
              </div>
            </article>
          </div>
        )}

        <Link className="back-account" to="/account">
          ← Back to Account
        </Link>
      </div>
    </main>
  );
}

export default MyOrders;
