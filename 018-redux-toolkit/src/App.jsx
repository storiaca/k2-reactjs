import { Outlet } from "react-router-dom";
import FormComponent from "./components/FormComponent";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-800">
      <h1 className="text-3xl text-green-400">Navbar</h1>
      <Outlet />
    </div>
  );
}

export default App;
