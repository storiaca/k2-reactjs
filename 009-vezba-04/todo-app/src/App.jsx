import { useState } from "react";
import ToggleMode from "./components/ToggleMode";
import TitleComponent from "./components/TitleComponent";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [allTodo, setAllTodo] = useState([]);

  return (
    <div className={`${darkMode ? "dark" : "light"}`}>
      <TitleComponent>
        <h1 className="bg-white dark:bg-slate-500 text-center text-2xl my-3">
          Todo App
        </h1>
      </TitleComponent>
      <ToggleMode darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="container mx-auto">
        <div className="flex gap-9 justify-evenly items-center">
          <div className="todo ">
            <TitleComponent>
              <h2 className="bg-white dark:bg-slate-500 text-center text-md my-3">
                Todo
              </h2>
            </TitleComponent>

            <TodoInput allTodo={allTodo} setAllTodo={setAllTodo} />

            <div className="flex flex-col">
              <TodoItem allTodo={allTodo} setAllTodo={setAllTodo} />
            </div>
          </div>
          <div className="products">
            <TitleComponent>
              <h2 className="bg-white dark:bg-slate-500 text-center text-md my-3">
                All Products
              </h2>
            </TitleComponent>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
