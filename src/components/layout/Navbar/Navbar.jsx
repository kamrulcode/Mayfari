import "./Navbar.scss";

import Logo from "./Logo";

import { FiMenu, FiSearch, FiShoppingBag } from "react-icons/fi";

import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import useCart from "../../../hooks/useCart";
import useWishlist from "../../../hooks/useWishlist";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { totalItems } = useCart();
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const { wishlistCount } = useWishlist();

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
          <button>
            <FiSearch />
          </button>

          <NavLink to="/wishlist">
            ♡{wishlistCount > 0 && <span>{wishlistCount}</span>}
          </NavLink>

          <button className="cart">
            <FiShoppingBag />

            <span className="badge">{totalItems}</span>
          </button>
        </div>
      </div>
      <MobileMenu open={open} setOpen={setOpen} />
    </header>
  );
}

export default Navbar;
