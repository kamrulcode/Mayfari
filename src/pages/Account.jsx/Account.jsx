import { Link, useNavigate } from "react-router-dom";
import "./Account.scss";
import { useAuth } from "../../context/AuthContext";

function Account() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <main className="account-page">
      <div className="account-container">
        <div className="account-header">
          <span>MY ACCOUNT</span>
          <h1>Welcome back, {user?.name}</h1>
          <p>Manage your orders, wishlist, addresses and account settings.</p>
        </div>

        <div className="account-layout">
          <aside className="account-sidebar">
            <Link to="/account" className="active">
              Overview
            </Link>

            <Link to="/account/orders" className="account-card">
              My Orders
            </Link>

            <Link to="/wishlist">Wishlist</Link>

            <Link to="/account/addresses">Saved Addresses</Link>

            <Link to="/account/settings">Account Settings</Link>

            <Link to="/">Continue Shopping</Link>
            <button
              className="logout-btn"
              onClick={() => {
                logout();
                navigate("/login");
              }}
            >
              Log Out
            </button>
          </aside>

          <section className="account-content">
            <div className="account-welcome">
              <span>WELCOME TO MAYFAIR</span>

              <h2>Your account</h2>

              <p>
                Everything you need to manage your Mayfair Candle experience in
                one place.
              </p>
            </div>

            <div className="account-cards">
              <Link to="/account/orders" className="account-card">
                <span>01</span>
                <h3>My Orders</h3>
                <p>View your previous orders and track current purchases.</p>
              </Link>

              <Link to="/wishlist" className="account-card">
                <span>02</span>
                <h3>Wishlist</h3>
                <p>Keep your favourite fragrances saved for later.</p>
              </Link>

              <Link to="/account/addresses" className="account-card">
                <span>03</span>
                <h3>Saved Addresses</h3>
                <p>Manage your delivery addresses.</p>
              </Link>

              <Link to="/account/settings" className="account-card">
                <span>04</span>
                <h3>Account Settings</h3>
                <p>Update your personal account information.</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Account;
