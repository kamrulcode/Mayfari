import "./MobileMenu.scss";

import { FiX } from "react-icons/fi";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { NavLink } from "react-router-dom";

function MobileMenu({ open, setOpen }) {
  const menuRef = useRef(null);
  const navRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    gsap.fromTo(
      navRef.current.children,
      {
        opacity: 0,
        x: -40,
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: "power3.out",
      },
    );

    gsap.fromTo(
      bottomRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.4,
        duration: 0.7,
      },
    );
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", close);

    return () => {
      window.removeEventListener("keydown", close);
    };
  }, [setOpen]);
  return (
    <div
      ref={menuRef}
      className={open ? "mobile-menu active" : "mobile-menu"}
      onClick={() => setOpen(false)}
    >
      <button
        className="close-btn"
        onClick={() => setOpen(false)}
        aria-label="Close menu"
      >
        <FiX />
      </button>

      <div className="menu-wrapper" onClick={(e) => e.stopPropagation()}>
        <nav ref={navRef}>
          <NavLink to="/">Home</NavLink>

          <NavLink to="/shop">Shop</NavLink>

          <NavLink to="/">Collections</NavLink>

          <NavLink to="/">Gift Boxes</NavLink>

          <NavLink to="/">Journal</NavLink>

          <NavLink to="/">About</NavLink>

          <NavLink to="/">Contact</NavLink>
        </nav>

        <div ref={bottomRef} className="menu-bottom">
          <div>
            <h5>Follow Us</h5>

            <NavLink to="/">Instagram</NavLink>

            <NavLink to="/">Facebook</NavLink>

            <NavLink to="/">Pinterest</NavLink>
          </div>

          <form>
            <h5>Newsletter</h5>

            <input type="email" placeholder="Email Address" />

            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
