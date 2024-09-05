import React, { memo, useState } from "react";
import {
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaSignOutAlt,
  FaMoon,
  FaSun,
  FaPhoneAlt,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Dropdown } from "antd";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  const items = [
    {
      key: "1",
      label: (
        <div className="flex items-center justify-center gap-3">
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            className="w-7 h-7 rounded-full"
          />
          {profile?.fname}
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="flex items-center justify-center">
          @{profile?.username}
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="flex items-center justify-center">
          <FaPhoneAlt /> {profile?.phone}
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <button
          onClick={() => dispatch({ type: "LOGOUT" })}
          className="text-red-500 flex items-center justify-center mx-auto"
        >
          <FaSignOutAlt size={16} /> Log Out
        </button>
      ),
    },
  ];

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav
      className={`p-4 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } flex justify-between items-center`}
    >
      <NavLink to="/" className="text-xl font-semibold">
        MyShop
      </NavLink>
      <div className="flex space-x-4 items-center">
        <NavLink to="/wishlist" className="text-gray-500 hover:text-gray-700">
          <FaHeart size={18} />
        </NavLink>
        <NavLink to="/cart" className="text-gray-500 hover:text-gray-700">
          <FaShoppingCart size={18} />
        </NavLink>
        <Dropdown menu={{ items }} placement="bottomRight" arrow>
          <button className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-200">
            <FaUser size={18} />
          </button>
        </Dropdown>
        <button
          onClick={toggleTheme}
          className="p-1 rounded-full hover:bg-gray-200"
        >
          {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>
      </div>
    </nav>
  );
};

export default memo(Header);
