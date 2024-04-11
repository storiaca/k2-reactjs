import { Outlet } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import axios from 'axios';
axios.defaults.baseURL = 'https://dummyjson.com';

function App() {
  return (
    <div className="">
      <NavbarComponent />
      <Outlet />
    </div>
  );
}

export default App;
