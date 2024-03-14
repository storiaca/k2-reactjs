import React from "react";

import logo from "../assets/rabbit.jpg";
function NavbarComponent() {
  return (
    <div className="navbar">
      <img
        src={logo}
        alt="Logo"
        className="navbar_logo"
        style={{ width: "100px" }}
      />
    </div>
  );
}

export default NavbarComponent;
