import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import Modal from "./Modal";

function TodoOutput({ allTodo, setAllTodo }) {
  const [open, setOpen] = useState(false);

  function handleRemove(id) {
    const removeItem = allTodo.filter((item) => item.id !== id);
    setAllTodo(removeItem);
  }

  function editInputValue(e, id) {
    setAllTodo([...allTodo, { id: id, title: e.target.value }]);
  }

  // function handleEdit(id) {
  //   setOpen((prevState) => !prevState);
  //   console.log(open);
  //   const editItem = allTodo.filter((item) => item.id === id);
  //   const [{ title }] = editItem;

  //   <Modal open={open} onClose={() => setOpen(false)}>
  //     <form>
  //       <label className="sr-only" htmlFor="inputValue">
  //         InputValue
  //       </label>
  //       <input
  //         type="text"
  //         id="inputValue"
  //         onChange={(e) => editInputValue(e, id)}
  //         value={title}
  //       />
  //     </form>
  //   </Modal>;
  // }

  // allTodo.push('Pera') // Number

  return (
    <div className="flex flex-col gap-8 text-center py-4 dark:text-white dark:bg-midnight">
      {allTodo.length > 0 ? (
        allTodo.map((todo) => (
          <div
            key={todo.id}
            className="border min-w-[364px] mx-auto flex justify-between items-center gap-3"
          >
            <p className="p-2 dark:text-white dark:bg-midnight">{todo.title}</p>

            <div className="btn-wrap">
              <button
                className="ml-3 py-2 text-black dark:text-white dark:bg-midnight"
                onClick={() => setOpen(true)}
              >
                <FaRegEdit />
              </button>
              <button
                className="ml-3 py-2 pr-2 text-black dark:text-white dark:bg-midnight"
                onClick={() => handleRemove(todo.id)}
              >
                <FaRegTrashCan />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Nema itema</p>
      )}
      {open && (
        <Modal open={open} onClose={() => setOpen(false)}>
          <h2>Modal radi</h2>
        </Modal>
      )}
    </div>
  );
}

export default TodoOutput;
