import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { generateOTP, getUser } from "../../helpers/helpers";

type FormData = {
  email: string;
};

const ResetPassword = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const schema = z.object({
    email: z.string().email({ message: "Invalid email" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const handleSave = async (data: FormData) => {
    generateOTP(data.email).then((OTP) => {
      console.log(OTP);
      if (OTP) return toast.success("OTP sent to your email");
      return toast.error("Something went wrong");
    });
  };

  return (
    <div className="bg-black min-h-screen font-NeueMachinaRegular text-custom-green">
      <h1 className="font-NeueMachinaUltrabold text-7xl pt-16 text-center">
        <span className="text-custom-green ">impact.</span>
        <span className="text-white">chain</span>{" "}
      </h1>

      <div className="flex flex-col gap-3 justify-center items-center py-10 font-TelegraphRegular">
        <p className="text-3xl">Forgot Password</p>
        <p className=" text-lg">Enter your email address</p>

        <form
          onSubmit={handleSubmit(handleSave)}
          className="bg-black shadow-md font-TelegraphRegular rounded px-8 pt-6 pb-8 max-w-sm"
        >
          <div className="mb-4">
            <input
              className="shadow placeholder-white  placeholder:font-semibold  rounded-3xl appearance-none border-2 border-green-500 w-full py-2 px-3 text-gray-white bg-black leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
            />
            <p className="pt-2 text-[12px]">{errors.email?.message}</p>
          </div>
          <div className="flex flex-col gap-3">
            <button
              className="bg-green-500 w-full rounded-3xl px-20 py-1.5 text-black font-semibold  hover:bg-green-600 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
            <Link to="/login" className="text-center text-white">
              Return to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
