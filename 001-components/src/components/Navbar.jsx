import "./navbar.css";
const Navbar = () => {
  let navbarItems = ["Home", "About", "Contact"];
  return (
    <nav className="navbar">
      <h2 className="navbarTitle">First React App</h2>

      <ul className="navbarList">
        {navbarItems.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
