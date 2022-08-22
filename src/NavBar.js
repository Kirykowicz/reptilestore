import { NavLink, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        The Reptile Store test changes more tests
      </Link>
      <ul>
        <NavLink to="/turtles">Turtles</NavLink>
        <NavLink to="/lizards">Lizards</NavLink>
        <NavLink to="/snakes">Snakes</NavLink>
      </ul>
    </nav>
  );
}
