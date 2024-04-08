import React from "react";
import { NavLink } from "react-router-dom";

function NavbarComponent() {
  return (
    <header className="flex justify-between">
      <h1 className="uppercase text-blue-500 text-3xl">Redux</h1>
      <ul className="flex items-center gap-3 uppercase">
        <li>
          <NavLink className="text-blue-600" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="text-blue-600" to="/profile">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink className="text-blue-600" to="/register">
            Register
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default NavbarComponent;
