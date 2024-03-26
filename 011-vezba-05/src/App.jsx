import { Outlet } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
// import ProductsPage from "./pages/ProductsPage";
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";

function App() {
  // let pathname = window.location.pathname.slice(1);

  // function routePathname() {
  //   if (pathname === "products") {
  //     return <ProductsPage />;
  //   } else if (pathname === "about") {
  //     return <AboutPage />;
  //   } else if (pathname === "contact") {
  //     return <ContactPage />;
  //   }
  // }
  return (
    <div className="container mx-auto">
      <NavbarComponent />
      {/* {routePathname()} */}
      <Outlet />
    </div>
  );
}

export default App;
