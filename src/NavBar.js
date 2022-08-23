import { NavLink, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        The Reptile Store
      </Link>
      <ul>
        <NavLink to="/turtles">Turtles</NavLink>
        <NavLink to="/lizards">Lizards</NavLink>
        <NavLink to="/snakes">Snakes</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </ul>
    </nav>
  );
}
