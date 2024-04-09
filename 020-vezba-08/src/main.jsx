import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// redux
import { Provider } from 'react-redux';
import store from './store/store.js';

// pages
import HomePage from './pages/HomePage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
// router
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
