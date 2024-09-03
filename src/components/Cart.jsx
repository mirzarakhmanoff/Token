import React from "react";
import { FaTrash } from "react-icons/fa";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import cart from "../redux/cart";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cartItems);
  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="text-3xl font-semibold mb-4">Your Cart</h1>
        <div className="grid grid-cols-1 gap-6">
          {cartItems?.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-white shadow-md rounded-lg p-4"
            >
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-lg mr-4"
              />
              <div className="flex-grow">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-600">${item.price}</p>
              </div>
              <div className="flex items-center">
                <button
                  className="px-3 py-1 bg-gray-200 text-gray-800 rounded-l-lg hover:bg-gray-300 transition"
                  onClick={() =>
                    dispatch({
                      type: "DEC_CART",
                      payload: { id: item.id, quantity: item.quantity - 1 },
                    })
                  }
                >
                  -
                </button>
                <input
                  type="text"
                  value={item.quantity}
                  readOnly
                  className="w-12 text-center bg-gray-100 border-t border-b border-gray-200"
                />
                <button
                  className="px-3 py-1 bg-gray-200 text-gray-800 rounded-r-lg hover:bg-gray-300 transition"
                  onClick={() =>
                    dispatch({
                      type: "INC_CART",
                      payload: { id: item.id, quantity: item.quantity + 1 },
                    })
                  }
                >
                  +
                </button>
              </div>
              <button
                className="ml-4 text-red-600 hover:text-red-800 transition"
                onClick={() => dispatch({ type: "REMOVE_CART", payload: item })}
              >
                <FaTrash size={20} />
              </button>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Total: $79.98</h2>
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
