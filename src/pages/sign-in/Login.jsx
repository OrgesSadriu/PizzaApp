import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineLockClosed } from "react-icons/hi";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isValid, setIsValid] = useState(true);

  function handleChange(event) {
    const { name, value } = event.target;
    if (event.target.value.length > 0) {
      setIsValid(true);
    }
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    if (formData.username.trim().length === 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }

  const [text, setText] = React.useState("Show");
  const [visible, setVisible] = React.useState("password");
  const icon =
    visible === "password" ? <FaEye size={20} /> : <FaEyeSlash size={20} />;
  const visibility = () => {
    setVisible((visible) => (visible === "password" ? "text" : "password"));
    setText((text) => (text === "Show" ? "Hide" : "Show"));
  };

  return (
    <div className="flex flex-col p-4 rounded-lg gap-3 bg-light-gray w-2/6 h-[340px] justify-center items-center mb-36">
      <p className="text-4xl">Log In</p>
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label htmlFor="username">Username *</label>
        <div className="flex items-center">
          <FaRegUser size={20} className="absolute ml-4" />
          <input
            className={`bg-gray-200 p-3 w-72 pl-12 rounded-lg ${
              isValid ? "" : "border-red-600"
            }`}
            type="text"
            placeholder="Enter Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <label htmlFor="password">Password *</label>
        <div className="flex items-center">
          <HiOutlineLockClosed size={24} className="absolute ml-4" />
          <input
            className="bg-gray-200 p-3 w-full pl-12 rounded-lg"
            type={visible}
            placeholder="Enter password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            minLength={8}
            maxLength={20}
            required
          />
          <div
            onClick={() => visibility()}
            className="absolute ml-60 transition ease-out cursor-pointer duration-500 hover:bg-slate-400 rounded-full p-1"
          >
            {icon}
          </div>
        </div>
        <div className="flex gap-5 justify-center">
          <div
            onClick={() => props.toggleForm()}
            className="text-blue-600 transition p-2 ease-out duration-500 cursor-pointer hover:bg-slate-300 rounded-md"
          >
            FORGOT PASSWORD?
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-5 transition ease-out duration-500 hover:bg-blue-700"
          >
            LOGIN
          </button>
        </div>
      </form>
      <div className="flex gap-2 mb-2">
        <p className="py-2">Don't have an account </p>
        <button
          onClick={() => props.toggleForm("register")}
          className="text-blue-600 transition ease-out duration-500 hover:bg-slate-300 rounded-md p-2"
        >
          SIGN UP
        </button>
      </div>
    </div>
  );
}

export default Login;
