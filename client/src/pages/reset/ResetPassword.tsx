import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import { resetPassword } from "../../helpers/helpers";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const { userEmail } = useSelector((state: RootState) => state.app);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (password !== confirm) {
        toast.error("Passwords do not match");
        setIsLoading(false);
        return;
      }
      await resetPassword(userEmail, password, confirm);
      navigate("/login");
    } catch (error) {
      console.error("Error resetting password: ", error);
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
        <p className="text-3xl md:text-xl">Reset Password</p>
        <form
          onSubmit={handleSubmit}
          className="bg-black shadow-md font-TelegraphRegular rounded px-8 pt-6 pb-8 max-w-sm"
        >
          <div className="mb-4">
            <input
              className="shadow placeholder-white  placeholder:font-semibold  rounded-3xl appearance-none border-2 border-green-500 w-full py-2 px-3 text-gray-white bg-black leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow placeholder-white  placeholder:font-semibold  rounded-3xl appearance-none border-2 border-green-500 w-full py-2 px-3 text-gray-white bg-black leading-tight focus:outline-none focus:shadow-outline"
              id="confirm"
              type="password"
              placeholder="Confirm Password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
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
