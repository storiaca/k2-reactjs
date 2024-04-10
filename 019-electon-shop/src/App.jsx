import { Outlet } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';

function App() {
  return (
    <div className="container">
      <NavbarComponent />
      <Outlet />
    </div>
  );
}

export default App;
