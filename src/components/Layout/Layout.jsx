import React from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white py-4 w-full mt-auto">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Learn Zustand. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
