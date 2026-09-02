import { Link } from "react-router-dom";

import { FiArrowUpRight } from "react-icons/fi";

import "./Footer.scss";
import {
  FaFacebook,
  FaFigma,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            MAYFAIR
          </Link>

          <p>
            Modern fragrance,
            <br />
            timeless ritual.
          </p>
        </div>

        {/* Shop */}
        <div className="footer-column">
          <h3>SHOP</h3>

          <Link to="/">All Fragrances</Link>

          <Link to="/">Best Sellers</Link>

          <Link to="/">New Arrivals</Link>

          <Link to="/">Gift Sets</Link>
        </div>

        {/* Information */}
        <div className="footer-column">
          <h3>INFORMATION</h3>

          <Link to="/">About Us</Link>

          <Link to="/">Contact</Link>

          <Link to="/">Shipping</Link>

          <Link to="/">Returns</Link>
        </div>

        {/* Follow */}
        <div className="footer-column">
          <h3>FOLLOW US</h3>

          <a href="#" target="_blank" rel="noreferrer">
            Instagram
            <FaInstagram />
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            Facebook
            <FaFacebook />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            Twitch
            <FaLinkedin />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            Facebook
            <FaFigma />
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            Pinterest
            <FaPinterest />
          </a>
        </div>
      </div>

      {/* Newsletter */}
      <div className="footer-newsletter">
        <div>
          <span>STAY IN THE KNOW</span>

          <h2>Discover what's next.</h2>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="email"
            placeholder="Your email address"
            aria-label="Email address"
          />

          <button type="submit">
            Subscribe
            <FiArrowUpRight />
          </button>
        </form>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MAYFAIR. All rights reserved.</p>

        <div>
          <Link to="/">Privacy</Link>

          <Link to="/">Terms</Link>

          <button type="button" onClick={scrollToTop}>
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
