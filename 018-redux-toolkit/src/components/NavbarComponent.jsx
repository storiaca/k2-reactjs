import React from 'react';
import { NavLink } from 'react-router-dom';

function NavbarComponent() {
  return (
    <header className="container mx-auto flex justify-between items-center h-[120px]">
      <h1 className="uppercase text-blue-500 text-3xl">Redux</h1>
      <ul className="flex items-center gap-3 uppercase">
        <li>
          <NavLink
            className="text-blue-300 uppercase text-lg hover:text-blue-600"
            to="/"
          >
            Home
          </NavLink>
        </li>
        {localStorage.hasOwnProperty('redux_user') ? (
          <li>
            <NavLink
              className="text-blue-300 uppercase text-lg hover:text-blue-600"
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink
              className="text-blue-300 uppercase text-lg hover:text-blue-600"
              to="/register"
            >
              Register
            </NavLink>
          </li>
        )}
      </ul>
    </header>
  );
}

export default NavbarComponent;
