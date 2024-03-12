import "./navbar.css";
import logo from "../../assets/logo.svg";
function Navbar() {
  const navItems = ["Home", "About", "Contact Us", "Blog"];

  return (
    <header>
      <nav className="navbar">
        <h1 className="navbarLogo">
          <img src={logo} alt="Logo" />
        </h1>
        <ul className="navbarList">
          {navItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
