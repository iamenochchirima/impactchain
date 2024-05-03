import React from "react";
import { Link } from "react-router-dom";

const GetOTP = ({ email, setEmail, handleSave, isLoading }) => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center py-3 font-TelegraphRegular">
      <p className="text-3xl md:text-xl">Forgot Password</p>
      <p className=" text-sm font-TelegraphUltraLight">Enter your email address</p>
      <form
        onSubmit={handleSave}
        className="bg-black shadow-md font-TelegraphRegular rounded px-8 pt-2 pb-8 max-w-sm"
      >
        <div className="mb-4">
          <input
            className="shadow placeholder-white font-TelegraphUltraLight rounded-xl appearance-none border-2 border-green-500 w-full py-2 px-3 text-gray-white bg-black leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-3">
          <button
            className="bg-green-500 w-full rounded-xl px-20 py-1.5 text-black font-TelegraphUltraLight   hover:bg-green-600 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
          <Link
            to="/login"
            className="text-center text-sm font-TelegraphUltraLight text-white"
          >
            Return to Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default GetOTP;
