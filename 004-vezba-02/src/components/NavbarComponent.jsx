import { useState } from "react";
import ButtonComponent from "./ButtonComponent";

import logo from "../assets/rabbit.jpg";

function NavbarComponent() {
  const [navItems, setNavItems] = useState(["Home", "About", "Contact"]);
  return (
    <header className="navbar">
      <nav className="navbar_wrap">
        <img className="navbar_logo" src={logo} alt="Logo" />
        <ul className="navbar_list">
          {navItems.map((item, index) => (
            <li className="navbar_list_item" key={index}>
              {item}
            </li>
          ))}
        </ul>

        <div className="navbar_buttons">
          <ButtonComponent label="Login" />
          <ButtonComponent label="Register" />
        </div>
      </nav>
    </header>
  );
}

export default NavbarComponent;
