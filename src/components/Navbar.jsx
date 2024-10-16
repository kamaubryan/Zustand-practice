import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center px-8 h-16 w-full bg-gray-100 mx-auto md:w-[80vw] shadow-lg">
      <img
        className="w-8 cursor-pointer"
        src="/images/logo.svg"
        alt="logo"
        onClick={() => navigate("/")}
      />
      <nav className="w-1/3 hidden md:inline">
        <ul className="w-full flex justify-evenly items-center">
          <li>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-gray-700 hover:text-blue-600">
              Services
            </Link>
          </li>
        </ul>
      </nav>
      <div className="hidden md:flex items-center space-x-4">
        <Link to="/login" className="text-gray-700 hover:text-blue-600">
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Sign Up
        </Link>
      </div>
      <nav className="md:hidden">
        <img
          onClick={() => {
            setShowNav((prev) => !prev);
            console.log(showNav);
          }}
          className="w-6 cursor-pointer"
          src="/images/burger.svg"
          alt="Menu"
        />
      </nav>
      {showNav && (
        <div className="absolute top-16 left-0 w-full bg-gray-100 md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-700 hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-gray-700 hover:text-blue-600"
              >
                Services
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-gray-700 hover:text-blue-600">
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
