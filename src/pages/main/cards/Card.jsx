import React, { useState } from "react";
import { TbShoppingCartPlus } from "react-icons/tb";
import Modal from "./Modal";

const Card = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-80 w-96 sm:w-80">
      <img className="rounded-t-xl h-48 w-96" src={props.image} alt="" />
      <div className="bg-gray-100 rounded-b-xl p-4 flex items-center justify-between gap-3">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold w-36 text-2xl">{props.title}</h1>
          <p className="text-xl w-10">€{props.price}</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-red-500 rounded-full w-28 py-1 text-white"
          >
            Size & Extras
          </button>
          <button
            onClick={() => props.cartOrder(props.data)}
            className="text-white flex w-28 items-center bg-green-500 px-5 py-2 rounded-full"
          >
            <TbShoppingCartPlus />
            Order
          </button>
        </div>
        <Modal
          data={props.data}
          cartOrder={props.cartOrder}
          smallPrice={props.smallPrice}
          price={props.price}
          largePrice={props.largePrice}
          smallSize={props.smallSize}
          mediumSize={props.mediumSize}
          largeSize={props.largeSize}
          title={props.title}
          open={isOpen}
          close={() => setIsOpen(false)}
          formData={props.formData}
          handleChange={props.handleChange}
          handleSubmit={props.handleSubmit}
        />
      </div>
    </div>
  );
};

export default Card;
