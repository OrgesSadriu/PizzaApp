import React from "react";
import Orders from "./Orders";
import Checkout from "./Checkout";
import Location from "./Location";
import OrderProduct from "./OrderProduct";
import { BsCheckCircleFill } from "react-icons/bs";

const index = ({ cart, formData }) => {
  const cartLength = cart.length;

  let subtotal = 0;
  cart.map((item) => {
    subtotal += item.price * item.quantity;
  });

  const deliveryFee = 1;

  const total = subtotal + deliveryFee;

  return (
    <div className="w-full pt-44 flex flex-col relative">
      {cartLength === 0 ? (
        <div className="flex shadow-xl gap-7 items-center p-6 pl-20 text-slate-500 text-3xl bg-light-gray mx-14">
          <BsCheckCircleFill /> YOUR CART IS CURRENTLY EMPTY.
        </div>
      ) : (
        <>
          <h1 className="text-5xl text-center mb-7 text-slate-500">
            YOUR ORDERS
          </h1>
          <div className="bg-light-gray shadow-xl mx-14 rounded-md">
            <OrderProduct />
            {cart.map((data) => (
              <Orders
                image={data.image}
                title={data.title}
                price={data.price}
                mediumSize={data.mediumSize}
                key={data.id}
                quantity={data.quantity}
                formData={formData}
                cart={cart}
              />
            ))}
          </div>
        </>
      )}
      {cartLength === 0 ? (
        <a
          href="/"
          className="text-center mt-10 ml-14 text-red-500 w-[250px] font-semibold p-5 bg-white rounded-full border-red-500 border-2 transition ease-out duration-500 hover:bg-red-500 hover:text-white"
        >
          RETURN TO ORDER
        </a>
      ) : (
        <Checkout subtotal={subtotal} deliveryFee={deliveryFee} total={total} />
      )}
      <Location />
    </div>
  );
};
export default index;
