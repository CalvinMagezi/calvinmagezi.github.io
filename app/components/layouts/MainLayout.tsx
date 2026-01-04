'use client';

import React from "react";
import MobileMenu from "../MobileMenu";
import Navbar from "../Navbar";
import PraxisChat from "../chat/PraxisChat";

function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col w-screen min-h-screen bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <MobileMenu />
      
      
      <div className="flex">
        <Navbar />
        <div className="flex-grow">{children}</div>
      </div>
      
      <PraxisChat />
    </div>
  );
}

export default MainLayout;