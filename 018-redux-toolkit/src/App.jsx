import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import NavbarComponent from './components/NavbarComponent';
import { restoreUserAction } from './store/userSlice';

// axios.interceptors.request.use((config) => {
//   // localstorage token
//   // if(localStorage.has)
//   config.headers.authorization = '11dhsbgsfbfk';

//   return config;
// });

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('redux_user'));
    dispatch(restoreUserAction(user));
  }, []);

  return (
    <div className="h-screen bg-neutral-800">
      <NavbarComponent />
      <Outlet />
    </div>
  );
}

export default App;
