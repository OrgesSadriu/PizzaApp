import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Order = ({
  title,
  price,
  cartDeleted,
  data,
  cart,
  setCart,
  cartOrder,
  quantity,
  mediumSize,
  formData,
  handleSubmit,
  pizzaSize,
}) => {
  console.log(formData);
  function deleteOrder(meal) {
    setCart(cart.filter((item) => item !== meal));
  }

  return (
    <div className="text-white bg-slate-800 p-3 w-80 ml-5 rounded-lg flex justify-between mb-3">
      <div>
        <h1 className="font-bold text-xl">{title}</h1>
        <div>
          <button
            onClick={() => cartDeleted(data)}
            className="px-3 py-0.5 hover:bg-gray-300 rounded-md p-1 transition ease-out duration-500"
          >
            -
          </button>
          <span className="px-2">{quantity}</span>
          <button
            onClick={() => cartOrder(data)}
            className="px-3 py-0.5 hover:bg-gray-300 rounded-md p-1 transition ease-out duration-500"
          >
            +
          </button>
        </div>
        <h2 className="font-semibold">
          <span>
            ${price * quantity} ({pizzaSize} Size)
          </span>
        </h2>
      </div>
      <button
        className="w-8 h-9 flex justify-center mt-5 items-center rounded-md bg-slate-900 text-red-500 hover:bg-slate-700 transition ease-out duration-500"
        onClick={() => deleteOrder(data)}
      >
        <FaTrashAlt />
      </button>
    </div>
  );
};
export default Order;
