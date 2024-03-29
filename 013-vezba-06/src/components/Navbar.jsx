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
    <header className="bg-gray-400 mb-10">
      <ul className="container mx-auto h-24 flex items-center justify-between">
        <h1 className="text-2xl">
          <Link to="/">Logo</Link>
        </h1>
        <ul className="flex items-center gap-5">
          {routes.map((route, i) => {
            return (
              <li key={i}>
                <NavLink to={route.path}>{route.label}</NavLink>
              </li>
            );
          })}
        </ul>
      </ul>
    </header>
  );
}

export default Navbar;
