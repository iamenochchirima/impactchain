import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import { useAuth } from "../../../../../hooks/AppContext";
import { UserRecord } from "../../../../../hooks/declarations/data/data.did";
import {
  setCurrentSDGInfo,
  setImpactTargets,
  setUserRecord,
} from "../../../../../redux/slices/app";
import { toastSuccess } from "../../../../../components/utils";

type Props = {
  setShowWarning: (showWarning: boolean) => void;
};

const RemoveWarning: FC<Props> = ({ setShowWarning }) => {
  const { currentSDGInfo, userRecord, impactTargets } = useSelector(
    (state: RootState) => state.app
  );
  const [loading, setLoading] = useState<boolean>(false);
  const { dataActor } = useAuth();
  const dispatch = useDispatch();

  const handleRemoveSDG = async () => {
    if (!userRecord || !currentSDGInfo || !impactTargets) {
      console.error("Some data is missing");
      return;
    }
    try {
      setLoading(true);
      const newImpactTargets = impactTargets.filter(
        (t) => t.id !== currentSDGInfo.target.id
      );
      const updatedImpactTargets = { ...userRecord.impactTargets };
      updatedImpactTargets[`ImpactTarget${currentSDGInfo.target.id}`] = [];
      const updatedUserRecord: UserRecord = {
        ...userRecord,
        impactTargets: updatedImpactTargets,
      };
      await dataActor?.updateUserRecord(updatedUserRecord);
      toastSuccess("SDG removed successfully");
      dispatch(setUserRecord(updatedUserRecord));
      dispatch(setImpactTargets(newImpactTargets));
      dispatch(setCurrentSDGInfo({ currentSDGInfo: null }));
      setShowWarning(false);
    } catch (error) {
      setLoading(false);
      console.log("Error removing SDG", error);
    }
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    className="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    <span> Remove SDG :</span>{" "}
                    <span className="text-green-700">
                      {" "}
                      {currentSDGInfo?.targetOption.name}
                    </span>
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to remove this sdg?. All of your
                      data you had uploaded to this SDG will be removed. This
                      action cannot be undone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex items-center sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={handleRemoveSDG}
                className=" w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                <span>
                  {loading ? "Removing..." : "Remove SDG"}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setShowWarning(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveWarning;
