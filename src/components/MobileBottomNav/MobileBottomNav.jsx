import { Link, useNavigate } from "react-router-dom";

import {
  FiHome,
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiUser,
} from "react-icons/fi";

import { useAuth } from "../../context/AuthContext";

import "./MobileBottomNav.scss";
import useWishlist from "../../hooks/useWishlist";

function MobileBottomNav() {
  const navigate = useNavigate();
  const { wishlist } = useWishlist();

  const { isAuthenticated } = useAuth();

  const handleAccountClick = () => {
    if (isAuthenticated) {
      navigate("/account");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="mobile-bottom-nav">
      <Link to="/" className="mobile-nav-item">
        <FiHome />

        <span>Home</span>
      </Link>

      <button
        type="button"
        className="mobile-nav-item"
        onClick={() => {
          // We'll connect this to your search overlay later.
          window.dispatchEvent(new CustomEvent("open-search"));
        }}
      >
        <FiSearch />

        <span>Search</span>
      </button>

      <Link to="/wishlist" className="mobile-nav-item mobile-wishlist">
        <span className="mobile-wishlist-icon">
          <FiHeart />

          {wishlist.length > 0 && (
            <span className="mobile-wishlist-count">{wishlist.length}</span>
          )}
        </span>

        <span>Wishlist</span>
      </Link>

      <Link to="/cart" className="mobile-nav-item">
        <FiShoppingBag />

        <span>Bag</span>
      </Link>

      <button
        type="button"
        className="mobile-nav-item"
        onClick={handleAccountClick}
      >
        <FiUser />

        <span>Account</span>
      </button>
    </nav>
  );
}

export default MobileBottomNav;
