import { useState, useEffect } from "react";

import ToggleMode from "./components/ToggleMode";
import TitleComponent from "./components/TitleComponent";
import TodoInput from "./components/TodoInput";
import TodoOutput from "./components/TodoOutput";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [allTodo, setAllTodo] = useState([]);

  //useEffect(() => {}, [allTodo]);

  return (
    <div className={`${darkMode ? "dark" : "light"}`}>
      <ToggleMode darkMode={darkMode} setDarkMode={setDarkMode} />
      <TitleComponent>
        <h1 className="text-3xl font-bold text-center dark:text-white dark:bg-midnight">
          Todo App
        </h1>
      </TitleComponent>

      <TodoInput allTodo={allTodo} setAllTodo={setAllTodo} />
      <TodoOutput allTodo={allTodo} setAllTodo={setAllTodo} />
    </div>
  );
}

export default App;
