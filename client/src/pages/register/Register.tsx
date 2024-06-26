import { useDispatch} from "react-redux";
import { setIsAuthenticated, setUserInfo } from "../../redux/slices/app";
import { Link } from "react-router-dom";
import {
  useSignupMutation,
} from "../../redux/api/usersApiSlice";
import { toast } from "react-toastify";
import { useState } from "react";


const Register = () => {
  const [signup, { isLoading }] = useSignupMutation();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


 

  const handleSave = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match"),
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
        };
      return;
    }
    try {
      const body = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      };
      const res = await signup(body).unwrap();
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
      <div className="bg-black min-h-screen text-custom-green pt-16">
        <h1 className="font-NeueMachinaUltrabold text-5xl md:text-5xl text-center">
          <span className="text-custom-green ">impact.</span>
          <span className="text-white">chain</span>{" "}
        </h1>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-center ">
            <h3 className=" font-TelegraphRegular text-3xl md:text-xl pt-3 text-custom-green">
              Create new account
            </h3>
            <h3 className="text-sm pt-1 font-TelegraphUltraLight text-center w-full ">
              Already have an account?{" "}
              <Link className="text-white" to="/login">
                Login here
              </Link>
            </h3>
          </div>
          <div className="flex ">
            <div className="w-full max-w-sm">
              <form
                onSubmit={handleSave}
                className="bg-black shadow-md font-TelegraphUltraLight rounded- px-8 pt-6 pb-8"
              >
                <div className="flex gap-3 items-center">
                <div className="mb-4">
                  <input
                    className="shadow placeholder-white min-w-[150px]  rounded-xl appearance-none border-2 border-green-500 w-full py-2 px-3 text-gray-white bg-black leading-tight focus:outline-none focus:shadow-outline"
                    id="firstname"
                    type="text"
                    placeholder="First Name"
                  value = {firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="shadow placeholder-white min-w-[150px]  rounded-xl appearance-none border-2 border-green-500 w-1/5 py-2 px-3 text-gray-white bg-black leading-tight focus:outline-none focus:shadow-outline"
                    id="lastname"
                    type="text"
                    placeholder="Last Name"
                  value = {lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required

                  />
        
                </div>
                </div>
                <div className="mb-4">
                  <input
                    className="shadow placeholder-white min-w-[300px]  rounded-xl appearance-none border-2 border-green-500 w-full py-2 px-3 text-gray-white bg-black leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-6">
                  <input
                    className="shadow placeholder-white min-w-[300px] rounded-xl appearance-none border-2 border-green-500 w-full py-2 px-3 text-gray-white bg-black leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-6">
                  <input
                    className="shadow placeholder-white min-w-[300px]  rounded-xl appearance-none border-2 border-green-500 w-full py-2 px-3 text-gray-white bg-black leading-tight focus:outline-none focus:shadow-outline"
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    value = {confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-center ">
                  <button
                    className="bg-green-500 rounded-xl px-20 py-1.5 text-black font-TelegraphUltraLight text-sm hover:bg-green-600 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    {isLoading ? "Loading..." : "Create Account"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mb-5 ">
            <p className="text-white text-sm font-TelegraphUltraLight">
              By signing up, you agree to our{" "}
              <a className="text-green-500 " href="#">
                Terms of Service
              </a>{" "}
              and{" "}
              <a className="text-green-500 " href="#">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
