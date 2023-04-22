import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import ForgotPass from "./ForgotPass";
const Index = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="pt-36 flex bg-SignInPizzaImage bg-no-repeat bg-cover bg-center justify-center">
      {currentForm === "login" ? (
        <Login toggleForm={toggleForm} />
      ) : currentForm === "register" ? (
        <Register toggleForm={toggleForm} />
      ) : (
        <ForgotPass toggleForm={toggleForm} />
      )}
    </div>
  );
};

export default Index;
