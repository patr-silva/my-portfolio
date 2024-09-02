import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle: React.FC<{ menuOpen: boolean }> = ({ menuOpen }) => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className={`p-2 dark:bg-gray-700 ${menuOpen ? "hidden" : ""}`}
    >
      {darkMode ? "🌞" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
