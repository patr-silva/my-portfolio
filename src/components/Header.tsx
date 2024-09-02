import React from "react";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
  return (
    <header className='p-4 bg-white dark:bg-gray-800'>
      <h1 className='text-2xl'>My Portfolio</h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;
