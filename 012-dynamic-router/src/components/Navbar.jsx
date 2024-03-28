import React from "react";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  const routes = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/products",
      label: "Products",
    },
    {
      path: "/contact",
      label: "Contact",
    },
  ];
  return (
    <header className="bg-gray-400 ">
      <div className="container h-28 flex mx-auto items-center justify-between">
        <h1 className="text-2xl">Logo</h1>

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
    </header>
  );
}

export default Navbar;
