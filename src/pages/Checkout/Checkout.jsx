import { useState } from "react";
import EmptyCart from "../../components/Cart/EmptyCart";
import useCart from "../../hooks/useCart";
import "./Checkout.scss";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, subtotal, isEmpty, clearCart, totalItems } = useCart();
  const navigate = useNavigate();
  const [savedAddresses] = useState(() => {
    const saved = localStorage.getItem("mayfair-addresses");

    return saved ? JSON.parse(saved) : [];
  });

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    payment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const validateForm = () => {
    if (!formData.email.trim()) {
      return "Email is required";
    }

    if (!formData.firstName.trim()) {
      return "First name is required";
    }

    if (!formData.lastName.trim()) {
      return "Last name is required";
    }

    if (!formData.address.trim()) {
      return "Address is required";
    }

    if (!formData.city.trim()) {
      return "City is required";
    }

    if (!formData.postalCode.trim()) {
      return "Postal code is required";
    }

    if (!formData.payment.trim()) {
      return "Please select a payment method";
    }

    return null;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validateForm();

    if (error) {
      alert(error);
      return;
    }

    const order = {
      id: `MF-${Date.now().toString().slice(-6)}`,
      customer: formData,
      items: cart,
      totalItems,
      subtotal,
      createdAt: new Date().toISOString(),
      status: "confirmed",
    };

    localStorage.setItem("latest-order", JSON.stringify(order));

    clearCart();

    navigate("/order-success");
  };

  if (isEmpty) {
    return <EmptyCart />;
  }
  return (
    <main className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-main" onSubmit={handleSubmit}>
          <h1>Checkout</h1>

          <section className="checkout-section">
            <h2>Contact Information</h2>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </div>
          </section>

          <section className="checkout-section">
            <h2>Shipping Address</h2>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>

                <input id="firstName" type="text" />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>

                <input id="lastName" type="text" />
              </div>
            </div>
            {savedAddresses.length > 0 && (
              <div className="saved-addresses">
                <h3>Saved Addresses</h3>

                <div className="saved-address-list">
                  {savedAddresses.map((address) => (
                    <button
                      type="button"
                      key={address.id}
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,

                          firstName: address.name.split(" ")[0],

                          lastName: address.name.split(" ").slice(1).join(" "),

                          phone: address.phone,

                          address: address.address,

                          city: address.city,

                          postalCode: address.postalCode,
                        }));
                      }}
                    >
                      <strong>{address.name}</strong>

                      <span>{address.address}</span>

                      <span>
                        {address.city}, {address.postalCode}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="address">Address</label>

              <input id="address" type="text" placeholder="Street address" />
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="city">City</label>

                <input id="city" type="text" />
              </div>

              <div className="form-group">
                <label htmlFor="postalCode">Postal Code</label>

                <input id="postalCode" type="text" />
              </div>
            </div>
          </section>

          <section className="checkout-section">
            <h2>Payment</h2>

            <div className="payment-options">
              <label className="payment-option">
                <input type="radio" name="payment" value="cod" />

                <span>Cash on Delivery</span>
              </label>

              <label className="payment-option">
                <input type="radio" name="payment" value="card" />

                <span>Credit / Debit Card</span>
              </label>
            </div>
          </section>
          <button type="button" className="place-order-btn">
            Place Order
          </button>
        </div>

        <aside className="checkout-summary">
          <h2>Order Summary</h2>

          {cart.map((item) => (
            <div className="checkout-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div>
                <h3>{item.name}</h3>

                <span>Qty: {item.quantity}</span>
              </div>

              <strong>${item.price * item.quantity}</strong>
              <div className="checkout-total">
                <span>Subtotal</span>

                <strong>${subtotal}</strong>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </main>
  );
}

export default Checkout;
