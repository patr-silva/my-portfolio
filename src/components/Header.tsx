import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='p-4 bg-white dark:bg-neutral-900'>
      <nav className='bg-white border-neutral-700 dark:bg-neutral-900'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-neutral-500 rounded-lg md:hidden hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600'
            aria-controls='navbar-default'
            aria-expanded='false'
            onClick={() =>
              setMenuOpen((prev) => {
                return !prev;
              })
            }
          >
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>

          <div
            className={`${menuOpen ? "" : "hidden"} w-full md:block md:w-auto`}
            id='navbar-default'
          >
            <ul className='font-semibold inter-regular flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-10 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-neutral-800 md:dark:bg-neutral-900 dark:border-neutral-700'>
              <li>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-red rounded md:bg-transparent md:p-0 dark:text-red"
                      : "block py-2 px-3 text-neutral-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  }
                  aria-current='page'
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/about'
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-red rounded md:bg-transparent md:p-0 dark:text-red"
                      : "block py-2 px-3 text-neutral-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/skills'
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-red rounded md:bg-transparent md:p-0 dark:text-red"
                      : "block py-2 px-3 text-neutral-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  }
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/projects'
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-red rounded md:bg-transparent md:p-0 dark:text-red"
                      : "block py-2 px-3 text-neutral-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/contacts'
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-red rounded md:bg-transparent md:p-0 dark:text-red"
                      : "block py-2 px-3 text-neutral-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  }
                >
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
          <ThemeToggle menuOpen={menuOpen} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
