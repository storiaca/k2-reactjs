import React from "react";
import { NavLink } from "react-router-dom";

function NavbarComponent() {
  const routes = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex justify-between items-center h-28">
      <h1 className="text-3xl">Logo</h1>
      <ul className="flex items-center gap-3">
        {routes.map((route, i) => {
          return (
            <li key={i}>
              <NavLink to={route.path}>{route.label}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavbarComponent;
