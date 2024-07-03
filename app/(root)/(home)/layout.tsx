"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOnLeft, setSidebarOnLeft] = useState(true);

  const toggleSidebarPosition = () => {
    setSidebarOnLeft((prev) => !prev);
  };

  return (
    <>
      <Navbar toggleSidebarPosition={toggleSidebarPosition} sidebarOnLeft={sidebarOnLeft} />
      <div className="flex">
        {sidebarOnLeft && <Sidebar />}
        <main className="flex w-full min-h-[100dvh] flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-8 md:px-10 xl:px-12">
          {children}
        </main>
        {!sidebarOnLeft && <Sidebar />}
      </div>
    </>
  );
};

export default HomeLayout;
