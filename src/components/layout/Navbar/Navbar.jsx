import "./Navbar.scss";

import Logo from "./Logo";

import { FiHeart, FiMenu, FiSearch, FiShoppingBag } from "react-icons/fi";

import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import useCart from "../../../hooks/useCart";
import useWishlist from "../../../hooks/useWishlist";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const { totalItems } = useCart();
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const { wishlistCount } = useWishlist();
  const navigate = useNavigate();

  useEffect(() => {
    const scroll = () => {
      setSticky(window.scrollY > 60);
    };

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <header className={sticky ? "navbar active" : "navbar"}>
      <div className="container">
        <button
          className="menu-btn"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <FiMenu />
        </button>

        <Logo />

        <div className="navbar-icons">
          <Link className="navbar-icon">
            <FiSearch />
          </Link>

          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              `header-wishlist navbar-icon ${isActive ? "active" : ""}`
            }
          >
            <FiHeart />

            {wishlistCount > 0 && (
              <span className="wishlist-count">{wishlistCount}</span>
            )}
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `navbar-icon ${isActive ? "active" : ""}`
            }
          >
            <FiShoppingBag />
            <span className="badge">{totalItems}</span>
          </NavLink>
          {isAuthenticated ? (
            <div className="account-menu">
              <Link to="/account" className="account-trigger">
                Account
              </Link>

              <div className="account-dropdown">
                <div className="account-user">
                  <strong>{user?.name}</strong>

                  <span>{user?.email}</span>
                </div>

                <div className="account-links">
                  <Link to="/account">My Account</Link>

                  <Link to="/account/orders">My Orders</Link>

                  <Link to="/wishlist">Wishlist</Link>

                  <Link to="/account/addresses">Saved Addresses</Link>
                </div>

                <button
                  type="button"
                  className="header-logout"
                  onClick={() => {
                    logout();
                    navigate("/login");
                  }}
                >
                  Log Out
                </button>
              </div>
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
      <MobileMenu open={open} setOpen={setOpen} />
    </header>
  );
}

export default Navbar;
