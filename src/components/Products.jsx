import React, { useEffect, useState } from "react";
import axios from "../api";
import { FaHeart } from "react-icons/fa";

const Products = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("/blogs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setData(res.data.payload))
      .catch((err) => console.error("Error fetching data", err));
  }, [token]);

  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {data?.map((blog) => (
        <div
          key={blog.id}
          className="w-full max-w-lg bg-white shadow-lg rounded-lg p-4 border border-gray-200"
        >
          <div className="flex items-start space-x-4 mb-4">
            <div className="flex-shrink-0">
              <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-900">
                {blog.title}
              </h4>
              <p className="text-gray-700">{blog.desc}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-gray-500">
            <button
              className="flex items-center space-x-1 hover:text-red-500"
              onClick={() => console.log("Like button clicked")}
            >
              <FaHeart />
              <span>Like</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
