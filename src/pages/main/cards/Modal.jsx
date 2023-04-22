import React from "react";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import { GiFullPizza } from "react-icons/gi";
import { TbShoppingCartPlus } from "react-icons/tb";

function Modal(props) {
  if (!props.open) return;
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-portalColor z-50"></div>
      <div className="fixed top-[17%] left-[30%] p-12 z-50 bg-bg rounded-lg">
        <h1 className="text-green-500 -mt-12 ml-16 font-semibold text-3xl">
          CHOOSE THE SIZE
        </h1>
        <FiX
          onClick={props.close}
          className="absolute right-0 top-0 m-1.5 cursor-pointer text-slate-500 hover:text-red-600"
          size={28}
        />
        <h1 className="text-center text-red-500">{props.title} pizza</h1>
        <form
          onSubmit={props.handleSubmit}
          className="flex flex-col gap-5 mt-5"
        >
          <label
            htmlFor="small"
            className="flex gap-6 bg-white rounded-xl shadow-xl cursor-pointer items-center justify-center"
          >
            <input
              id="small"
              name="small"
              checked={props.formData.small}
              onChange={props.handleChange}
              type="checkbox"
              className="absolute right-16 accent-red-500 cursor-pointer"
              value={"s"}
            />
            <div className="flex flex-col text-red-500  items-center">
              <GiFullPizza size={27} className=" mt-[6px] mb-2" />
              <p>{props.smallSize}</p>
            </div>
            <div className="text-xl text-red-500 font-bold">
              Price: €{props.smallPrice}
            </div>
          </label>

          <label
            htmlFor="medium"
            className="flex gap-6 bg-white rounded-xl shadow-xl cursor-pointer border-2  border-red-500 items-center justify-center"
          >
            <input
              id="medium"
              name="medium"
              checked={props.formData.medium}
              onChange={props.handleChange}
              type="checkbox"
              className="absolute right-16 accent-red-500 cursor-pointer"
              value={"m"}
              defaultChecked
            />
            <div className="flex flex-col items-center text-red-500">
              <GiFullPizza
                size={34}
                className="text-red-500 mt-[2px] mb-[7px]"
              />
              <p>{props.mediumSize}</p>
            </div>
            <div className="text-xl text-red-500 font-bold">
              Price: €{props.price}
            </div>
          </label>

          <label
            htmlFor="large"
            className="flex gap-6 bg-white rounded-xl shadow-xl cursor-pointer items-center justify-center"
          >
            <input
              id="large"
              name="large"
              checked={props.formData.large}
              onChange={props.handleChange}
              type="checkbox"
              className="absolute right-16 accent-red-500 cursor-pointer"
              value={"l"}
            />
            <div className="flex flex-col items-center text-red-500">
              <GiFullPizza size={40} className="mb-1 text-red-500 " />
              <p>{props.largeSize}</p>
            </div>
            <div className="text-xl text-red-500 font-bold">
              Price: €{props.largePrice}
            </div>
          </label>
          <button
            type="submit"
            onClick={() => props.cartOrder(props.data)}
            className="ml-[154px] text-white flex w-28 items-center bg-green-500 px-5 py-2 rounded-full"
          >
            <TbShoppingCartPlus />
            Order
          </button>
          <h1 className="text-red-500">
            This doesnt work yet!(Just press the order button)
          </h1>
        </form>
      </div>
    </>
  );
}

export default Modal;
