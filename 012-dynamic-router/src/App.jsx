import axios from "axios";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

// dev mode
// axios.defaults.baseURL = "localhost:4000";
axios.defaults.baseURL = "https://dummyjson.com";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
