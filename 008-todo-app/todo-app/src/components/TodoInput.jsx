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
    <div>
      <input
        type="text"
        placeholder="Insert TODO"
        onChange={handleInputValue}
        value={inputValue}
      />
      <button onClick={handleTodo} className="bg-white text-black">
        Add TODO
      </button>
    </div>
  );
}

export default TodoInput;
