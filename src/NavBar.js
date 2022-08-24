import { NavLink, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        The Reptile Store <img src="https://i.pinimg.com/736x/28/f0/2c/28f02c2fbaf3032fb199b544e8d48af0--woodburning-lizards.jpg" alt="lizard logo" />
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
