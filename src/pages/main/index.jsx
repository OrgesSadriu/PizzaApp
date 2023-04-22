import React, { useState } from "react";
import Card from "./cards/Card";
import Cart from "./cart/Cart";
import PIZZA_DATAS from "../../assets/pizzas";

const Index = ({
  cart,
  cartOrder,
  cartDeleted,
  setCart,
  formData,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div className="flex justify-between pt-24 ">
      <div className="flex flex-wrap justify-evenly p-5 w-full">
        {PIZZA_DATAS.map((data) => (
          <Card
            data={data}
            image={data.image}
            title={data.title}
            smallPrice={data.smallPrice}
            price={data.price}
            largePrice={data.largePrice}
            smallSize={data.smallSize}
            mediumSize={data.mediumSize}
            largeSize={data.largeSize}
            key={data.id}
            cart={cart}
            cartOrder={cartOrder}
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        ))}
      </div>
      <Cart
        cart={cart}
        setCart={setCart}
        cartDeleted={cartDeleted}
        cartOrder={cartOrder}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Index;
