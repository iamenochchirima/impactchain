import { useDispatch, useSelector } from "react-redux";
import { setIsAuthenticated, setUserInfo } from "../../redux/slices/app";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../../redux/api/usersApiSlice";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: RootState) => state.app);
  const [login, { isSuccess, isLoading}] = useLoginMutation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isSuccess) {
      dispatch(setIsAuthenticated(true));
    }
  }, [userInfo]);
   

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email,
        password,
      };
      const res = await login(data).unwrap();
      dispatch(setIsAuthenticated(true));
      dispatch(setUserInfo(res));
    } catch (error) {
      if ((error as any)?.status === 401) {
        toast.error((error as any)?.data.message),
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
  return (
    <div className="bg-black min-h-screen w-screen text-custom-green pt-44">
      <h1 className="font-NeueMachinaUltrabold text-5xl md:text-7xl text-center">
        <span className="text-custom-green ">impact.</span>
        <span className="text-white">chain</span>{" "}
      </h1>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col items-center ">
          <h3 className=" font-TelegraphBold text-3xl md:text-4xl pt-3 text-custom-green">
            Login
          </h3>
          <h3 className="text-xl py-3 font-TelegraphRegular text-center w-full ">
            Sign in to continue
          </h3>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full max-w-xs">
            <form
            onSubmit={handleLogin}
             className="bg-black shadow-md font-TelegraphRegular rounded px-3 pt-3 pb-8 ">
              <div className="mb-4 min">
                <input
                  className="shadow placeholder-white min-w-[250px] font-TelegraphUltraLight placeholder:font-semibold  rounded-xl appearance-none border-2 border-green-500 w-full py-2 px-3 text-gray-white bg-black leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                 value = {email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              
              </div>
              <div className="mb-6 ">
                <input
                  className="shadow placeholder-white min-w-[250px] font-TelegraphUltraLight placeholder:font-semibold  rounded-xl appearance-none border-2 border-green-500 w-full py-2 px-3 text-gray-white bg-black leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value = {password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-green-500 rounded-xl  font-TelegraphUltraLight w-[150px] py-1.5 text-black   hover:bg-green-600 font-bold focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  {isLoading ? "Loading" : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-xl font-TelegraphUltraLight mb-3">
        <Link to="/forgot-password">Forgot password?</Link>
        <Link to="/signup">Create an account</Link>
      </div>
      </div>
    </div>
  );
};

export default Login;
