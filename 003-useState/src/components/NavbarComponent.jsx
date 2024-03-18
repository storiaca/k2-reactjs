import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import { FaAlignJustify } from "react-icons/fa6";
import logo from "../assets/rabbit.jpg";
function NavbarComponent() {
  const menuItems = ["Home", "About", "Contact", "Blog"];
  const [toggle, setToggle] = useState(true);

  function handleToggle() {
    setToggle(!toggle);
    setToggle((prevState) => !prevState);
  }
  console.log(toggle);
  return (
    <div className="navbar">
      <img
        src={logo}
        alt="Logo"
        className="navbar_logo"
        style={{ width: "100px" }}
      />

      {toggle ? (
        <ul className="navbar_menuItems">
          {menuItems.map((el, index) => {
            return (
              <li key={index} className="navbar_menuItems_item">
                {el}
              </li>
            );
          })}
        </ul>
      ) : null}

      <button className="navbar_toggle" onClick={handleToggle}>
        <FaAlignJustify />
      </button>

      <div className="navbar_buttons">
        <ButtonComponent label="Login" />
        <ButtonComponent label="Register" />
      </div>
    </div>
  );
}

export default NavbarComponent;
