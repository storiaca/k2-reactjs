import { Outlet } from "react-router-dom";
import FormComponent from "./components/FormComponent";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-800">
      <NavbarComponent />
      <Outlet />
    </div>
  );
}

export default App;
