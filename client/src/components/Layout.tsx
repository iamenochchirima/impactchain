import { Outlet } from "react-router-dom";

import Sidebar from "./SideBar";
import Navbar from "./Header";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useAuth } from "../hooks/AppContext";
import { useEffect, useState } from "react";

const Layout = () => {
  const {isAuthenticated, userInfo} = useSelector((state: RootState) => state.app);
  const {dataActor} = useAuth();
  const [isRegistered, setIsRegistered] = useState<boolean | null>(null);


  useEffect(() => {
    if (isAuthenticated  && dataActor) {
      getRecords()
    }
  }, [isAuthenticated, dataActor]);

  const getRecords = async () => {
    const records = await dataActor?.getUserRecord(userInfo.email)
   if (records) {
    if ("ok" in records) {
      setIsRegistered(true)
    } else {
      setIsRegistered(false)
    }
   }
  }

  return (
    <div className=" font-TelegraphRegular bg-black text-white ">
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100 min-h-screen">
        <Navbar />
        <div className="px-4 pt-20 pb-5 md:px-10 mx-auto w-full relative">
          <div className="pt-5 md:pt-20 ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
