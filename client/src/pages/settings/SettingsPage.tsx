import { useState } from "react";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import Password from "./components/Password";


const SettingsPage = () => {
  const [page, setPage] = useState<string>("Settings")
  return (
    <div>
      {page === "Settings" && <Settings  {...{setPage}} />}
      {page === "Profile" && <Profile {...{setPage}}/>}
      {page === "Password" && <Password {...{setPage}}/>}
    </div>
  );
};

export default SettingsPage;
