import { NavLink } from 'react-router-dom';

function NavbarComponent() {
  //const routes = ['Products', 'About', 'Contact'];
  const routes = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];
  // let pathname = window.location.pathname.slice(1);

  return (
    <div className="container mx-auto flex items-center justify-between h-32">
      <h1 className="text-3xl">Router</h1>
      <ul className="flex gap-5">
        {routes.map((route, i) => {
          return (
            <li key={i}>
              <NavLink to={route.path}>{route.label}</NavLink>
            </li>
          );
        })}
        {/* {routes.map((route, i) => {
          return (
            <li key={i}>
              <a
                className={pathname === route.toLowerCase() ? 'active' : ''}
                href={`/${route.toLowerCase()}`}
              >
                {route}
              </a>
            </li>
          );
        })} */}
      </ul>
    </div>
  );
}

export default NavbarComponent;
