import { useDispatch, useSelector } from "react-redux";
import { setIsAuthenticated, setUserInfo } from "../../redux/slices/app";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { registerUser } from "../../helpers/helpers";
import { RootState } from "../../redux/store";
import {
  useLazyAuthenticateQuery,
  useSignupMutation,
} from "../../redux/api/usersApiSlice";
import { toast } from "react-toastify";

type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [signup, { isLoading, isSuccess }] = useSignupMutation();
  const [check, data] = useLazyAuthenticateQuery();

  const schema = z.object({
    firstname: z
      .string()
      .min(2, { message: "First Name must be at least 2 characters long" })
      .max(50, { message: "First Name must be at most 50 characters long" }),
    lastname: z
      .string()
      .min(2, { message: "Last Name must be at least 2 characters long" })
      .max(50, { message: "Last Name must be at most 50 characters long" }),
    email: z.string().email({ message: "Invalid email" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const handleSave = async (data: FormData) => {
    try {
      // let ress = await check({}).unwrap();
      // console.log("Check response", ress);

      const body = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
      };
      const res = await signup(body).unwrap();
      console.log("Finished");
      dispatch(setIsAuthenticated(true));
      dispatch(setUserInfo(res));
    } catch (error) {
      if ((error as any)?.status === 400) {
        toast.error("Something went wrong"),
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          };
      }
      console.log(error);
    }
  };

  const dispatch = useDispatch();
  return (
    <>
      <div className="bg-black min-h-screen font-NeueMachinaRegular text-custom-green">
        <h1 className="font-NeueMachinaUltrabold text-7xl pt-16 text-center">
          <span className="text-custom-green ">impact.</span>
          <span className="text-white">chain</span>{" "}
        </h1>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-center ">
            <h3 className=" font-NeueMachinaRegular text-3xl pt-3 text-custom-green">
              Create new account
            </h3>
            <h3 className="text-2xl pt-3 font-TelegraphRegular text-center w-full ">
              Already have an account?{" "}
              <Link className="text-white" to="/login">
                Login here
              </Link>
            </h3>
          </div>
          <div className="flex ">
            <div className="w-full max-w-sm">
              <form
                onSubmit={handleSubmit(handleSave)}
                className="bg-black shadow-md font-TelegraphRegular rounded px-8 pt-6 pb-8"
              >
                <div className="flex gap-3 items-center">
                <div className="mb-4">
                  <input
                    className="shadow placeholder-white min-w-[150px]  placeholder:font-semibold  rounded-3xl appearance-none border-2 border-green-500 w-full py-2 px-3 text-gray-white bg-black leading-tight focus:outline-none focus:shadow-outline"
                    id="firstname"
                    type="text"
                    placeholder="First Name"
                    {...register("firstname", { required: "First name is required" })}
                  />
                  <p className="pt-2 text-[12px]">{errors.firstname?.message}</p>
                </div>
                <div className="mb-4">
                  <input
                    className="shadow placeholder-white min-w-[150px]  placeholder:font-semibold  rounded-3xl appearance-none border-2 border-green-500 w-1/5 py-2 px-3 text-gray-white bg-black leading-tight focus:outline-none focus:shadow-outline"
                    id="lastname"
                    type="text"
                    placeholder="Last Name"
                    {...register("lastname", { required: "Last name is required" })}
                  />
                  <p className="pt-2 text-[12px]">{errors.lastname?.message}</p>
                </div>
                </div>
                <div className="mb-4">
                  <input
                    className="shadow placeholder-white min-w-[300px]  placeholder:font-semibold  rounded-3xl appearance-none border-2 border-green-500 w-full py-2 px-3 text-gray-white bg-black leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: "Email is required" })}
                  />
                  <p className="pt-2 text-[12px]">{errors.email?.message}</p>
                </div>
                <div className="mb-6">
                  <input
                    className="shadow placeholder-white min-w-[300px]  placeholder:font-semibold  rounded-3xl appearance-none border-2 border-green-500 w-full py-2 px-3 text-gray-white bg-black leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  <p className="pt-2 text-[12px]">{errors.password?.message}</p>
                </div>
                <div className="mb-6">
                  <input
                    className="shadow placeholder-white min-w-[300px]  placeholder:font-semibold  rounded-3xl appearance-none border-2 border-green-500 w-full py-2 px-3 text-gray-white bg-black leading-tight focus:outline-none focus:shadow-outline"
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    {...register("confirmPassword", {
                      required: "Password is required",
                    })}
                  />
                  <p className="pt-2 text-[12px]">{errors.confirmPassword?.message}</p>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    className="bg-green-500 rounded-3xl px-20 py-1.5 text-black font-semibold  hover:bg-green-600font-bold focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    {isLoading ? "Loading..." : "Sign Up"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mb-5">
            <p className="text-white">
              By signing up, you agree to our{" "}
              <a className="text-green-500" href="#">
                Terms of Service
              </a>{" "}
              and{" "}
              <a className="text-green-500" href="#">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* <div className="bg-black text-white min-h-screen">
        <h1>Impact.Chain </h1>
        <div className="">
          <h3>Create new account</h3>
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </div>
        <form className="" onSubmit={handleSubmit(handleSave)}>
          <input
            type="text"
            placeholder="First Name"
            {...register("firstname", { required: "First Name is required" })}
          />
          <p>{errors.firstname?.message}</p>

          <input
            type="text"
            placeholder="Last Name"
            {...register("lastname", { required: "Last Name is required" })}
          />
          <p>{errors.lastname?.message}</p>

          <input type="email" placeholder="Email" {...register("email")} />
          <p>{errors.email?.message}</p>
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
          <p>{errors.password?.message}</p>
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Password is required",
            })}
          />
          <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
        </form>
      </div> */}
    </>
  );
};

export default Register;
