import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
import { FaHeart } from "react-icons/fa";

const Wishlist = () => {
  const data = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const toggleWishlist = (item) => {
    dispatch({ type: "TOGGLE_WISHLIST", payload: item });
  };

  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {data?.map((e) => (
          <div
            key={e.id}
            className="relative bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={e.images[0]}
              alt={e.name}
              className="w-full h-60 object-contain"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2 truncate">
                {e.name}
              </h2>
              <p className="text-gray-700 text-lg">${e.price}</p>
            </div>
            <button
              onClick={() => toggleWishlist(e)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white border border-gray-300 hover:bg-red-50 text-gray-600 hover:text-red-500 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              <FaHeart size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
