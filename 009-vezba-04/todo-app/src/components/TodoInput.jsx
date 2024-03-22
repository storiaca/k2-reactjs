import { useState } from "react";

function TodoInput({ allTodo, setAllTodo }) {
  const [inputValue, setInputValue] = useState("");

  function handleInputValue(e) {
    setInputValue(e.target.value);
  }

  function handleTodoItem() {
    if (inputValue) {
      setAllTodo([...allTodo, { id: new Date().getTime(), title: inputValue }]);
      setInputValue("");
    }
  }

  return (
    <div className="mb-8">
      <input
        className="border px-2 py-1"
        type="text"
        placeholder="Add new TODO"
        value={inputValue}
        onChange={(event) => handleInputValue(event)}
      />
      <button
        onClick={handleTodoItem}
        className="border text-red-600 px-2 py-1"
      >
        Add TODO
      </button>
    </div>
  );
}

export default TodoInput;
