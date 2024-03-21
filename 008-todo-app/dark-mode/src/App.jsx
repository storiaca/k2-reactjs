import { useState } from "react";

import ToggleMode from "./components/ToggleMode";
import TitleComponent from "./components/TitleComponent";
import ProductsComponent from "./components/ProductsComponent";

TitleComponent;
function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : "light"}`}>
      <TitleComponent>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </TitleComponent>
      <ToggleMode darkMode={darkMode} setDarkMode={setDarkMode} />

      <ProductsComponent />
    </div>
  );
}

export default App;
