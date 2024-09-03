import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className='min-h-screen flex flex-col dark:bg-neutral-900'>
      <Header />
      <main className='flex-1 p-4'>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
