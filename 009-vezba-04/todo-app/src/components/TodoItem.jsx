import React from "react";

function TodoItem({ allTodo, setAllTodo }) {
  function handleRemove(id) {
    let newArray = allTodo.filter((item) => item.id !== id);

    setAllTodo(newArray);
  }

  return (
    <div className="">
      {allTodo.length > 0 ? (
        allTodo.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-blue-400 mb-4 p-5"
          >
            <h3>{item.title}</h3>
            <button
              onClick={() => handleRemove(item.id)}
              className="border border-red-600 p-2"
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <h3>There is no TODO's</h3>
      )}
    </div>
  );
}

export default TodoItem;
