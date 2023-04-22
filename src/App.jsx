import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, SignIn, MyOrders } from "./pages";
import Navbar from "./components/Navbar";

const App = () => {
  const [cart, setCart] = useState([]);

  function cartOrder(meal) {
    let newCart = [...cart];
    let mealInCart = newCart.find((item) => item.title === meal.title);

    if (mealInCart) {
      mealInCart.quantity++;
    } else {
      mealInCart = { ...meal, quantity: 1 };
      newCart.push(mealInCart);
    }
    setCart(newCart);
  }

  function cartDeleted(meal) {
    let newCart = [...cart];
    let mealInCart = newCart.find((item) => item.title === meal.title);
    if (mealInCart) {
      mealInCart.quantity--;
      if (mealInCart.quantity === 0) {
        setCart(newCart.filter((items) => items !== mealInCart));
      }
    }
    setCart(newCart);
  }

  // const initialFormData = {
  //   small: false,
  //   medium: true,
  //   large: false,
  // };
  const [formData, setFormData] = useState("m");

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    console.log(value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    if (formData == "s") {
      return <span>Small</span>;
    } else if (formData == "m") {
      return <span>Medium</span>;
    } else if (formData == "l") {
      return <span>Large</span>;
    } else {
      return <span>Medium</span>;
    }
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                cart={cart}
                cartOrder={cartOrder}
                cartDeleted={cartDeleted}
                setCart={setCart}
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            }
            exact
          />
          <Route path="/sign-in" element={<SignIn />} exact />
          <Route
            path="/my-orders"
            element={<MyOrders cart={cart} formData={formData} />}
            exact
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
