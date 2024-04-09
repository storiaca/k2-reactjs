import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { restoreUserAction } from './store/userSlice';

import NavbarComopnent from './components/NavbarComopnent';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    dispatch(restoreUserAction(user));
  }, []);

  return (
    <div className="container mx-auto pt-5">
      <NavbarComopnent />
      <Outlet />
    </div>
  );
}

export default App;
