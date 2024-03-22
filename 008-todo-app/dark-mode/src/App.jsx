import { useState } from "react";

import ToggleMode from "./components/ToggleMode";
import TitleComponent from "./components/TitleComponent";
import ProductsComponent from "./components/ProductsComponent";

TitleComponent;
function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : "light"}`}>
      <ToggleMode darkMode={darkMode} setDarkMode={setDarkMode} />

      <ProductsComponent />
    </div>
  );
}

export default App;
