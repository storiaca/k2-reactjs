import axios from "axios";
import { Outlet } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import Navbar from "./components/Navbar";

import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = "https://dummyjson.com";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  );
}

export default App;
