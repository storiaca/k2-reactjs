import { Outlet } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <div className="h-screen bg-neutral-800">
      <NavbarComponent />
      <Outlet />
    </div>
  );
}

export default App;
