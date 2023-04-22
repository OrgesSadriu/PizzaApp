import React from "react";
import { MdAllInbox } from "react-icons/md";

function Checkout(props) {
  let subtotal = props.subtotal.toFixed(2);
  let deliveryFee = props.deliveryFee.toFixed(2);
  let total = props.total.toFixed(2);

  return (
    <div className="flex flex-col items-end mr-14">
      <div className="text-white shadow-lg bg-gray-700 w-[450px] mt-14 h-64 border rounded-xl flex flex-col gap-y-5">
        <h1 className="font-bold text-3xl pt-7 text-center">CART TOTAL</h1>
        <div className="flex w-96 justify-between pl-14">
          <p className="font-bold text-xl">Subtotal:</p>
          <p className="font-normal text-xl">${subtotal}</p>
        </div>
        <div className="flex w-96 justify-between pl-14">
          <p className="font-bold text-xl">Delivery fee:</p>
          <p className="font-normal text-xl">${deliveryFee}</p>
        </div>
        <hr />
        <div className="flex w-96 justify-between pl-14">
          <p className="font-bold text-xl">Total:</p>
          <p className="font-normal text-xl">${total}</p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <button className="text-white w-[450px] mt-3 font-semibold p-5 bg-red-500 rounded-full hover:bg-transparent hover:border-red-500 hover:border-2 transition ease-out duration-500 hover:text-red-500">
          CHECKOUT NOW!
        </button>
        <a
          href="/"
          className="text-center text-red-500 w-[450px] font-semibold p-5 bg-white rounded-full border-red-500 border-2 transition ease-out duration-500 hover:bg-red-500 hover:text-white"
        >
          RETURN TO ORDER
        </a>
      </div>
    </div>
  );
}

export default Checkout;
