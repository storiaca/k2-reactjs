import { useState } from "react";

function TodoInput({ allTodo, setAllTodo }) {
  const [inputValue, setInputValue] = useState("");

  function handleInputValue(e) {
    setInputValue(e.target.value);
  }

  function handleTodo() {
    if (inputValue) {
      setAllTodo([...allTodo, { title: inputValue, id: new Date().getTime() }]);
      setInputValue("");
    }
  }

  return (
    <div className="dark:text-white dark:bg-midnight py-8">
      <div className="container mx-auto flex gap-2 items-center justify-center">
        <input
          type="text"
          placeholder="Insert TODO"
          onChange={handleInputValue}
          value={inputValue}
          className="px-2 py-1 border dark:border-white dark:text-white dark:bg-midnight"
        />
        <button
          onClick={handleTodo}
          className="px-2 py-1 border bg-white border-midnight text-black dark:border-white dark:text-white dark:bg-midnight"
        >
          Add TODO
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
