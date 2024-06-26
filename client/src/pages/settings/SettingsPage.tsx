import { useState } from "react";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import Password from "./components/Password";
import BrandKit from "./components/BrandKit";
import Payment from "./components/Payment";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Litepaper from "./components/Litepaper";
import { FaArrowLeftLong } from "react-icons/fa6";
import ESGs from "./components/ESG/ESGs";

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
      {page === "Settings" && <Settings {...{setPage}}  />}
      {page === "Profile" && <Profile  />}
      {page === "Password" && <Password  />}
      {page === "BrandKit" && <BrandKit  />}
      {page === "ESG" && <ESGs />}
      {page === "Payment" && <Payment  />}
      {page === "Terms" && <Terms  />}
      {page === "Privacy" && <Privacy  />}
      {page === "Litepaper" && <Litepaper  />}
    </div>
  );
};

export default SettingsPage;
