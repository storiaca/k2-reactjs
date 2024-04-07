import React from "react";
import { NavLink } from "react-router-dom";

function NavbarComponent() {
  return (
    <header>
      <h1>Redux</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default NavbarComponent;
