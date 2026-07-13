import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Fashion</Link>
      <div className="nav-links">
        <NavLink to="#">Catalogue</NavLink>
        <NavLink to="#">Fashion</NavLink>
        <NavLink to="#">Favourite</NavLink>
        <NavLink to="#">Lifestyle</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;