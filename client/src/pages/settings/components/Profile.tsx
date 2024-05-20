import React, { FC, useState } from "react";
import { RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../../hooks/AppContext";
import { useUpdateUserMutation } from "../../../redux/api/usersApiSlice";
import { UserRecord } from "../../../hooks/declarations/data/data.did";
import { setUserInfo } from "../../../redux/slices/app";

const Profile = () => {
  const { dataActor } = useAuth();
  const dispatch = useDispatch();
  const [updateUser] = useUpdateUserMutation();
  const { userRecord, userInfo } = useSelector((state: RootState) => state.app);
  const [initFirstname, setInitFirstname] = useState<string>(
    userInfo.firstname
  );
  const [initFastname, setInitLastname] = useState<string>(userInfo.lastname);
  const [initFompanyName, setInitCompanyName] = useState<string>(
    userRecord ? userRecord.aboutCompany.name : ""
  );
  const [firstname, setFirstname] = useState<string>(userInfo.firstname);
  const [lastname, setLastname] = useState<string>(userInfo.lastname);
  const [companyName, setCompanyName] = useState<string>(
    userRecord ? userRecord.aboutCompany.name : ""
  );
  const [edit, setEdit] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleEdit = async () => {
    if (
      firstname === initFirstname &&
      lastname === initFastname &&
      companyName === initFompanyName
    ) {
      setEdit(false);
      return;
    }
   try {
    setLoading(true);
    const user = {
      firstname,
      lastname,
      email: userInfo.email,
    };
    updateUser(user);
    const _updatedUserInfo = {
      ...userInfo,
      firstname,
      lastname,
    };
    dispatch(setUserInfo(_updatedUserInfo));
    if (companyName !== initFompanyName && userRecord) {
     const updadtedUserRecord: UserRecord = {
        ...userRecord,
        aboutCompany: {
          ...userRecord.aboutCompany,
          name: companyName,
        },
      };

      await dataActor?.updateUserRecord(updadtedUserRecord);
    }
    setEdit(false);
    setLoading(false);
   } catch (error) {
      console.log("Error in updating user: ", error);
   }
  };

  return (
    <div>
      <div className="flex items-center gap-3 mt-10 ml-5 font-TelegraphRegular">
        <img className="w-15 h-15" src="./profile.svg" />
        <span className=" font-NeueMachinaUltrabold text-3xl font-bold">
          Profile
        </span>
      </div>
      <div>
        <div className="flex w-full justify-between">
          <div className="flex w-full flex-col gap-2 ml-5 mt-10">
            <p className="  text-white text-lg font-TelegraphRegular">
              First Name:
            </p>
            <input
              value={firstname}
              type="text"
              disabled={!edit}
              onChange={(e) => setFirstname(e.target.value)}
              className="bg-black border-2 w-full border-custom-green rounded-2xl p-2"
            ></input>
          </div>
          <div className="flex w-full flex-col gap-2 ml-5 mt-10">
            <p className="  text-white text-lg font-TelegraphRegular">
              Last Name:
            </p>
            <input
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              type="text"
              disabled={!edit}
              className="bg-black border-2 border-custom-green rounded-2xl p-2"
            ></input>
          </div>
        </div>

        <div className="flex flex-col gap-2 ml-5 mt-10">
          <label className="  text-white text-lg font-TelegraphRegular">
            Company Name:
          </label>
          <input
            type="text"
            disabled={!edit}
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="bg-black border-2 border-custom-green rounded-2xl p-2"
          ></input>
        </div>

        <div className="ml-5 mt-5 mb-5">
          <button
            onClick={edit ? handleEdit : () => setEdit(true)}
            className=" bg-custom-green px-5 py-2 rounded-3xl"
          >
            <span className="text-black font-TelegraphRegular text-xl">
              {edit ? `${loading ? "Saving..." : "Save"}` : "Edit"}
            </span>
          </button>
        </div>

        <div className="mt-4 ml-5">
          <h1 className="text-lg font-bold">Email</h1>
          <div className="flex items-center">
            <div className="">
              <span className="font-bold">{userInfo.email}</span>
              <button className=" text-custom-green px-5  rounded-3xl">
                <span className=" font-TelegraphRegular text-xl">
                  Change Email
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="ml-5 mt-5">
          <p className=" text-white text-lg font-TelegraphRegular">
            Appearance:
          </p>
          <div className="flex gap-4">
            <button className=" bg-custom-green px-5 py-2 mt-3 rounded-3xl">
              <span className=" text-white font-TelegraphRegular text-xl">
                Light
              </span>
            </button>

            <button className=" bg-custom-green px-5 py-2 mt-3 rounded-3xl">
              <span className=" text-black font-TelegraphRegular text-xl">
                Dark
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2 ml-5 mt-10">
          <p className="  text-white text-xl font-TelegraphBold">
            Delete your Organisation:
          </p>
          <p className="text-white font-TelegraphRegular">
            You may delete your organisation at any time.
          </p>
          <p className="text-white font-TelegraphRegular">
            This will delete all of your data.
          </p>
        </div>
        <button className=" bg-custom-green px-5 py-2 mt-3 ml-5 rounded-3xl">
          <span className=" text-black font-TelegraphRegular text-xl">
            Delete Organisation
          </span>
        </button>
      </div>
    </div>
  );
};

export default Profile;
