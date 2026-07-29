import { Link, NavLink } from "react-router-dom";
function Navbar({cart}) {
  const  totalItems = cart.reduce(
    (sum, item) => sum + item.quantity, 0
  );
  return (
    <nav className="navbar">
      <NavLink className="web-name" to="/">Fashion</NavLink>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="#">Contact us</NavLink>
        <Link to="/cart" className="cart-link">
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{totalItems > 99 ? "99+" : totalItems}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;