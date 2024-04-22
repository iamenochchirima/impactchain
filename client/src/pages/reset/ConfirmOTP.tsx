import React, { useState } from "react";
import { generateOTP, verifyOPT } from "../../helpers/helpers";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { styles } from "../../styles/styles";

const ConfirmOTP = ({ email }) => {
  const [code, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleConfirmOTP = async (e) => {
    e.preventDefault();
    const { status } = await verifyOPT(email, code);
    if (status === 200) {
      console.log("OTP verified successfully");
      return navigate("/reset-password");
    }
    return toast.error("Invalid OTP code");
  };

  const handleResendOTP = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    generateOTP(email).then((OTP) => {
      if (OTP) {
        setIsLoading(false);
        return toast.success("OTP has been resent to your email address");
      }
      return toast.error("Something went wrong");
    });
  };
  return (
    <div>
      <div className="flex flex-col gap-3 justify-center items-center py-10 font-TelegraphRegular">
        <p className=" text-lg">Enter the OTP sent to your email address</p>
        <form className="bg-black shadow-md font-TelegraphRegular rounded px-8 pt-6 pb-8 max-w-sm">
          <div className="mb-4">
            <input
              className="shadow placeholder-white    rounded-3xl appearance-none border-2 border-green-500 w-full py-2 px-3 text-gray-white bg-black leading-tight focus:outline-none focus:shadow-outline"
              id="code"
              type="text"
              placeholder="OTP Code"
              value={code}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <button
              onClick={handleConfirmOTP}
              className={`${styles.roundedButton}`}
              type="submit"
            >
              Submit
            </button>
            <div className="flex justify-center items-center gap-2">
              <span className="text-white">Didn't receive the OTP?</span>
              <button
                onClick={handleResendOTP}
                className="text-custom-green"
                type="button"
              >
                {isLoading ? "Loading..." : "Resend OTP"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfirmOTP;
