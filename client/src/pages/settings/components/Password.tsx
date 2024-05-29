import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useChangePasswordMutation } from "../../../redux/api/usersApiSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Status } from "../../../hooks/declarations/file_scaling_manager/file_scaling_manager.did";

const Password = () => {
  const { userInfo } = useSelector((state: RootState) => state.app);
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [change, {isSuccess, error, isError}] = useChangePasswordMutation();

  const handleResetPassword = async () => {
    setLoading(true);
    try {
      if (newPassword !== confirmNewPassword) {
        toast.error("Passwords do not match");
        return;
      }
      if (newPassword.length < 6) {
        toast.error("Password must be at least 6 characters long");
        return;
      }
      if (currentPassword === newPassword) {
        toast.error("New password cannot be the same as current password");
        return;
      }

      const body = {
        email: userInfo.email,
        currentPassword,
        newPassword,
        confirmPassword: confirmNewPassword,
      };
     await change(body)
     
       
    } catch (error) {
      console.log("Error in handleResetPassword: ", error);
      toast.error("Error resetting password");
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Password reset successfully");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
    } else if (isError && error) {
      toast.error("Error resetting password");
    } else {
      return;
    }
  }, [isSuccess, error, isError]);
  return (
    <div>
      <div className="">
        <div className="flex items-center gap-3 mt-10 ml-5 font-TelegraphRegular">
          <img className="w-15 h-15" src="./lock%key.svg" />
          <span className=" font-NeueMachinaUltrabold text-3xl font-bold">
            Password
          </span>
        </div>

        <div className="flex flex-col gap-2 ml-5 mt-10">
          <p className="  text-white text-lg font-TelegraphRegular">
            Current Password
          </p>
          <input
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            type="password"
            className="bg-black border-2 border-custom-green rounded-2xl p-2"
          ></input>
        </div>

        <div className="flex flex-col gap-2 ml-5 mt-10">
          <p className="  text-white text-lg font-TelegraphRegular">
            New Password
          </p>
          <input
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            type="password"
            className="bg-black border-2 border-custom-green rounded-2xl p-2"
          ></input>
        </div>

        <div className="flex flex-col gap-2 ml-5 mt-10">
          <p className="  text-white text-lg font-TelegraphRegular">
            Confirm New Password
          </p>
          <input
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            type="password"
            className="bg-black border-2 border-custom-green rounded-2xl p-2"
          ></input>
        </div>

        <button
          onClick={handleResetPassword}
          className=" bg-custom-green p-3 ml-5 mt-5 rounded-3xl"
        >
          <span className=" text-black font-TelegraphRegular text-xl">
            Reset Password
          </span>
        </button>
      </div>
    </div>
  );
};

export default Password;
