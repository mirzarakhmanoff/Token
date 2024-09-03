import React, { useState } from "react";
import {
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaSignOutAlt,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav
      className={`flex justify-between items-center p-4 ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div
        className={`text-2xl font-bold ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        <a href="/">MyShop</a>
      </div>
      <div className="flex space-x-4">
        <NavLink to={"/wishlist"}>
          <button
            className={`p-3 rounded-full shadow-lg transition transform hover:scale-110 ${
              darkMode
                ? "text-white bg-blue-500 hover:bg-blue-600"
                : "text-gray-900 bg-blue-100 hover:bg-blue-200"
            }`}
          >
            <FaHeart size={20} />
          </button>
        </NavLink>
        <NavLink to={"/cart"}>
          <button
            className={`p-3 rounded-full shadow-lg transition transform hover:scale-110 ${
              darkMode
                ? "text-white bg-green-500 hover:bg-green-600"
                : "text-gray-900 bg-green-100 hover:bg-green-200"
            }`}
          >
            <FaShoppingCart size={20} />
          </button>
        </NavLink>
        <button
          className={`p-2 flex rounded-full shadow-lg transition transform hover:scale-110 ${
            darkMode
              ? "text-white bg-gray-600 hover:bg-gray-700"
              : "text-gray-900 bg-gray-200 hover:bg-gray-300"
          }`}
        >
          <FaUser size={20} />
          Account
        </button>
        <button
          onClick={() => dispatch({ type: "LOGOUT" })}
          className={`p-2 flex rounded-full shadow-lg transition transform hover:scale-110 ${
            darkMode
              ? "text-white bg-red-500 hover:bg-red-600"
              : "text-gray-900 bg-red-100 hover:bg-red-200"
          }`}
        >
          <FaSignOutAlt size={20} />
          LogOut
        </button>
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full shadow-lg transition transform hover:scale-110 ${
            darkMode
              ? "text-white bg-yellow-500 hover:bg-yellow-600"
              : "text-gray-900 bg-yellow-100 hover:bg-yellow-200"
          }`}
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Header;
