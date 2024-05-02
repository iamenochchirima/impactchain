import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { generateOTP } from "../../helpers/helpers";
import GetOTP from "./GetOTP";
import ConfirmOTP from "./ConfirmOTP";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const [email, setEmail] = useState("");

  const handleSave = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    generateOTP(email).then((OTP) => {
      if (OTP) {
        setOtpSent(true);
        setIsLoading(false);
        return toast.success("OTP sent successfully");
      }
      return toast.error("Something went wrong");
    });
  };

  return (
    <div className="bg-black min-h-screen font-NeueMachinaRegular text-custom-green pt-44">
      <h1 className="font-NeueMachinaUltrabold text-5xl md:text-7xl text-center">
        <span className="text-custom-green ">impact.</span>
        <span className="text-white">chain</span>{" "}
      </h1>

      {otpSent ? (
        <ConfirmOTP {...{email}}/>
      ) : (
        <GetOTP
          {...{
            email,
            setEmail,
            handleSave,
            isLoading,
          }}
        />
      )}
    </div>
  );
};

export default ForgotPassword;
