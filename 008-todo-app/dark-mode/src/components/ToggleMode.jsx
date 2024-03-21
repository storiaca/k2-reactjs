import { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

function ToggleMode({ darkMode, setDarkMode }) {
  useState();
  function handleMode() {
    setDarkMode((prevState) => !prevState);
  }
  return (
    <div
      onClick={handleMode}
      className="flex items-center justify-center my-5 cursor-pointer"
    >
      {darkMode ? <MdDarkMode size={42} /> : <CiLight size={42} />}
    </div>
  );
}

export default ToggleMode;
