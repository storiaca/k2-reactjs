import { Outlet } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ProductsPage from './pages/ProductsPage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';
function App() {
  // let pathname = window.location.pathname.slice(1);

  // function checkCurrentPage() {
  //   if (pathname === 'products') {
  //     return <ProductsPage />;
  //   } else if (pathname === 'about') {
  //     return <AboutPage />;
  //   } else if (pathname === 'contact') {
  //     return <ContactPage />;
  //   }
  // }

  return (
    <div>
      <NavbarComponent />
      {/* {checkCurrentPage()} */}
      <Outlet />

      <ToastContainer />
    </div>
  );
}

export default App;
