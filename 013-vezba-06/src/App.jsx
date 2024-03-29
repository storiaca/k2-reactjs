import { Outlet } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = "https://dummyjson.com";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />

      <ToastContainer />
    </div>
  );
}

export default App;
