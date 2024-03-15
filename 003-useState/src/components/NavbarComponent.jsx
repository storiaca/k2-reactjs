import { useState } from "react";

import logo from "../assets/rabbit.jpg";
function NavbarComponent() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(true);
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
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
}

export default NavbarComponent;
