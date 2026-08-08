import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/" className="logo">
      <span>MAYFAIR</span>

      <small>CANDLES</small>
    </NavLink>
  );
}

export default Logo;
