import React from "react";

function TodoOutput({ allTodo, setAllTodo }) {
  function handleRemove(id) {
    const removeItem = allTodo.filter((item) => item.id !== id);
    setAllTodo(removeItem);
  }

  // allTodo.push('Pera') // Number

  return (
    <div className="flex flex-col gap-8 text-center py-4 dark:text-white dark:bg-midnight">
      {allTodo.length > 0 ? (
        allTodo.map((todo) => (
          <div
            key={todo.id}
            className="border min-w-80 mx-auto flex justify-between items-center gap-3"
          >
            <p className="p-2 dark:text-white dark:bg-midnight">{todo.title}</p>
            <button
              className="ml-3 py-2 px-4 text-black dark:text-white dark:bg-midnight"
              onClick={() => handleRemove(todo.id)}
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>Nema itema</p>
      )}
    </div>
  );
}

export default TodoOutput;
