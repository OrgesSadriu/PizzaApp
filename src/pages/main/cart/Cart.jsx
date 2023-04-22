import React, { useState } from "react";
import Order from "./order/Order";

const Cart = ({
  cart,
  cartOrder,
  cartDeleted,
  setCart,
  formData,
  handleSubmit,
}) => {
  let size = "Medium";
  if (formData.small === true) {
    size = "Small";
  } else if (formData.medium === true) {
    size = "Medium";
  } else if (formData.large === true) {
    size = "Large";
  }

  return (
    <div className="bg-black flex flex-col">
      <div className="w-96 bg-black p-4 sm:right-0 sm:-bottom-5 sm:w-56">
        <h1 className="text-2xl text-white border-b-2 mb-5">YOUR ORDER</h1>
      </div>
      {cart.map((data) => (
        <Order
          data={data}
          title={data.title}
          mediumSize={data.mediumSize}
          price={data.price}
          key={data.id}
          cart={cart}
          setCart={setCart}
          cartOrder={cartOrder}
          cartDeleted={cartDeleted}
          quantity={data.quantity}
          formData={formData}
          pizzaSize={size}
          smallPrice={data.smallPrice}
          largePrice={data.largePrice}
          handleSubmit={handleSubmit}
        />
      ))}
    </div>
  );
};
export default Cart;
