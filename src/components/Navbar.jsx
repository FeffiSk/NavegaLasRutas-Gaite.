import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{ padding: "1rem", backgroundColor: "#333", color: "white" }}>
    <Link to="/" style={{ margin: "0 1rem", color: "white", textDecoration: "none" }}>
      Inicio
    </Link>
    <Link to="/about" style={{ margin: "0 1rem", color: "white", textDecoration: "none" }}>
      Acerca de
    </Link>
  </nav>
);

export default Navbar;