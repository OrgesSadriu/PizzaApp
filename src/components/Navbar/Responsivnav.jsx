import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPizzaSlice, FaTruckMoving } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

function Responsivnav() {
  const [change, setChange] = useState(false);

  return (
    <div className="w-full flex items-center justify-between">
      <h1 className="text-4xl text-yellow-400 px-20 text-center leading-7 md:absolute left-5 top-5">
        PIZZA <br /> <span className="text-lg border-t-2">APP LOGO</span>
      </h1>
      <div
        className={`flex gap-3 ${
          change ? "md:flex-col" : "md:hidden"
        } md:absolute md:w-full  md:p-4  md:bg-gradient-to-b from-red-700 to-red-600 md:items-center md:z-10 md:top-24`}
      >
        <Link
          to="/"
          className="text-white text-center mr-5 md:flex md:gap-3 hover:bg-red-800 rounded-lg p-1 transition ease-out duration-500"
        >
          <FaPizzaSlice className="text-4xl mx-auto" />
          <p className="text-2xl text-center">GET PIZZA</p>
        </Link>
        <Link
          to="/my-orders"
          className="text-white text-center md:flex md:gap-3 hover:bg-red-800 rounded-lg p-1 transition ease-out duration-500"
        >
          <FaTruckMoving className="text-4xl mx-auto" />
          <p className="text-2xl text-center">MY ORDERS</p>
        </Link>
        <Link
          to="/sign-in"
          className="text-white flex items-center border-2 px-5 py-1 rounded-full text-center ml-auto mr-5 md:mx-auto p-1 hover:bg-red-800 transition ease-out duration-500"
        >
          <AiOutlineUser className="text-4xl mx-auto md:mr-12" />
          Sign In
        </Link>
      </div>
      <div
        className="p-5 text-white hidden md:block absolute right-1 top-3.5 cursor-pointer"
        onClick={() => setChange(!change)}
      >
        {change ? <FiX size={36} /> : <FiMenu size={36} />}
      </div>
    </div>
  );
}

export default Responsivnav;
