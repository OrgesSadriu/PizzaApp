import React from "react";

function ForgotPass() {
  return (
    <div className="flex flex-col rounded-lg gap-3 bg-light-gray w-2/6 h-80 justify-center items-center mb-36">
      <p className="text-4xl">Forgot Password</p>
      <p className="text-xl text-center">
        Please enter the registered mail to get the password reset link
      </p>
      <input
        type="email"
        placeholder="Email"
        className="p-3 w-4/6 rounded-lg bg-gray-200"
        required
      />
      <button
        className="px-8 py-2 text-white rounded-md bg-green-600 hover:bg-green-700 transition ease-out duration-500"
        type="submit"
      >
        Submit
      </button>
    </div>
  );
}

export default ForgotPass;
