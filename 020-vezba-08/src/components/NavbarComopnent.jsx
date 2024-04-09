import { NavLink } from 'react-router-dom';

function NavbarComopnent() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-4xl uppercase text-blue-600">Redux Toolkit</h1>
      <ul className="flex items-center gap-5">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {localStorage.hasOwnProperty('user') ? (
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        ) : (
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}

export default NavbarComopnent;
