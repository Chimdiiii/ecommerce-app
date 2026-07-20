import { Link, NavLink } from "react-router-dom";
function Navbar({cart}) {
  return (
    <nav className="navbar">
      <Link to="/">Fashion</Link>
      <div className="nav-links">
        <NavLink to="#">Catalogue</NavLink>
        <NavLink to="#">Fashion</NavLink>
        <NavLink to="#">Favourite</NavLink>
        <NavLink to="#">Lifestyle</NavLink>
        <Link to="/cart" className="cart-link">
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{cart.length}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;