import { useState } from "react";

import ToggleMode from "./components/ToggleMode";
import TitleComponent from "./components/TitleComponent";
import TodoInput from "./components/TodoInput";
import TodoOutput from "./components/TodoOutput";
import { useEffect } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [allTodo, setAllTodo] = useState([]);

  useEffect(() => {
    console.log(allTodo);
  }, [allTodo]);
  return (
    <div
      className={`${
        darkMode ? "dark" : "light"
      } flex flex-col items-center justify-center my-24`}
    >
      <TitleComponent>
        <h1 className="text-3xl font-bold underline">Todo App</h1>
      </TitleComponent>
      <ToggleMode darkMode={darkMode} setDarkMode={setDarkMode} />

      <TodoInput allTodo={allTodo} setAllTodo={setAllTodo} />
      <TodoOutput allTodo={allTodo} setAllTodo={setAllTodo} />
    </div>
  );
}

export default App;
