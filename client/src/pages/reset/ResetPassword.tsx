import { useState } from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {

    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            // Call the API to send the reset password email
            // await sendResetPasswordEmail(email);
            setIsLoading(false);
            // Redirect the user to the login page
            // navigate("/login");
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };
  return (
    <div className="bg-black min-h-screen font-NeueMachinaRegular text-custom-green pt-16">
      <h1 className="font-NeueMachinaUltrabold text-5xl text-center">
        <span className="text-custom-green ">impact.</span>
        <span className="text-white">chain</span>{" "}
      </h1>
      <div className="flex flex-col gap-3 justify-center items-center py-10 font-TelegraphRegular">
      <p className="text-3xl md:text-xl">Forgot Password</p>
      <p className=" text-sm">Enter your email address</p>
      <form
        onSubmit={handleSubmit}
        className="bg-black shadow-md font-TelegraphRegular rounded px-8 pt-6 pb-8 max-w-sm"
      >
        <div className="mb-4">
          <input
            className="shadow placeholder-white  placeholder:font-semibold  rounded-3xl appearance-none border-2 border-green-500 w-full py-2 px-3 text-gray-white bg-black leading-tight focus:outline-none focus:shadow-outline"
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
            className="bg-green-500 w-full rounded-3xl px-20 py-1.5 text-black font-semibold  hover:bg-green-600 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
          <Link
            to="/login"
            className="text-center font-TelegraphRegular text-white"
          >
            Return to Login
          </Link>
        </div>
      </form>
    </div>
    </div>
  );
};

export default ResetPassword;
