import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-gray-300 mb-10">
      <div className="container mx-auto flex justify-between items-center h-28">
        <h1 className="text-3xl">Logo</h1>
        <ul className="flex gap-5 items-center">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          {localStorage.hasOwnProperty("vite_user") ? (
            <button>Logout</button>
          ) : (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
