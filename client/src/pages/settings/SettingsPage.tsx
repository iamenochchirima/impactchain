import { useState } from "react";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import Password from "./components/Password";
import BrandKit from "./components/BrandKit";
import ESG from "./components/ESG";
import Payment from "./components/Payment";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Litepaper from "./components/Litepaper";
import { FaArrowLeftLong } from "react-icons/fa6";

const SettingsPage = () => {
  const [page, setPage] = useState<string>("Settings");
  return (
    <div>
      {page !== "Settings" && (
        <div className="">
          <FaArrowLeftLong
            size={30}
            className="text-custom-green ml-5"
            onClick={() => setPage("Settings")}
          />
        </div>
      )}
      {page === "Settings" && <Settings {...{ setPage }} />}
      {page === "Profile" && <Profile {...{ setPage }} />}
      {page === "Password" && <Password {...{ setPage }} />}
      {page === "BrandKit" && <BrandKit {...{ setPage }} />}
      {page === "ESG" && <ESG {...{ setPage }} />}
      {page === "Payment" && <Payment {...{ setPage }} />}
      {page === "Terms" && <Terms {...{ setPage }} />}
      {page === "Privacy" && <Privacy {...{ setPage }} />}
      {page === "Litepaper" && <Litepaper {...{ setPage }} />}
    </div>
  );
};

export default SettingsPage;
