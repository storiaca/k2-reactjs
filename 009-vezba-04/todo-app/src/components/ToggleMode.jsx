import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

function ToggleMode({ darkMode, setDarkMode }) {
  function handleMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div
      onClick={handleMode}
      className="flex items-center justify-center my-3 cursor-pointer dark:text-white dark:bg-midnight"
    >
      {darkMode ? <MdDarkMode size={42} /> : <CiLight size={42} />}
    </div>
  );
}

export default ToggleMode;
