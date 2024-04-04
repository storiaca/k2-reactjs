import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";

// redux
import store from "./store/store.js";
import { Provider } from "react-redux";

// router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Doslo je do greske</h1>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
    ],
  },
]);
// 3. Provider Store
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
