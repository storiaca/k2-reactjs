import React from "react";

function TodoOutput({ allTodo, setAllTodo }) {
  function handleRemove(id) {
    const removeItem = allTodo.filter((item) => item.id !== id);
    setAllTodo(removeItem);
  }

  // allTodo.push('Pera') // Number

  return (
    <div className="flex flex-col gap-8 mt-4">
      {allTodo.length > 0 ? (
        allTodo.map((todo) => (
          <div key={todo.id}>
            <p className="p-2 bg-slate-400">{todo.title}</p>
            <button
              className="text-red-400"
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
