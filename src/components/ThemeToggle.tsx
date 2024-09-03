import React from "react";
import { useTheme } from "../context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeToggle: React.FC<{ menuOpen: boolean }> = ({ menuOpen }) => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className={`p-2 dark:bg-neutral-900 ${menuOpen ? "hidden" : ""}`}
    >
      {darkMode ? (
        <SunIcon className='size-7 text-white' />
      ) : (
        <MoonIcon className='size-7 text-neutral-900' />
      )}
    </button>
  );
};

export default ThemeToggle;

