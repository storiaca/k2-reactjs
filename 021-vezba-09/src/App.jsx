import { Outlet } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import axios from 'axios';
axios.defaults.baseURL = 'https://dummyjson.com';
import Loader from './components/Loader';
function App() {
  return (
    <div className="">
      {/* <Loader /> */}
      <NavbarComponent />
      <Outlet />
    </div>
  );
}

export default App;
