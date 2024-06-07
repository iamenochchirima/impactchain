import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setShowThisModal } from "../../../redux/slices/app";
import { RootState } from "../../../redux/store";
import ChartThree from "./Charts/ChartThree";
import SDGDetailsChart from "./SDGDetailsChart";

const SDGDetails = () => {
  const { selectedSDGDetails } = useSelector((state: RootState) => state.app);
  console.log("target", selectedSDGDetails);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setShowThisModal(""));
  };
  return (
    <div className="fixed z-50  inset-0 text-white overflow-y-auto bg-black bg-opacity-75">
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-TelegraphRegular">
        <div className="llg:h-screen flex flex-col justify-center items-center  w-full rounded-xl px-3 py-2 space-y-8">
          <div className="mb-10 w-[90%] sm:w-3/4 md:w-[70%] bg-custom-gray p-4 rounded-xl">
            <div className="flex justify-between items-center">
              <img
                src={"i.c.logo2.png"}
                alt="logo-image"
                className="h-20 w-20"
              />
              <h3 className="text-2xl font-bold text-white mt-4 text-center font-TelegraphBold">
                {selectedSDGDetails?.name}
              </h3>
              <button onClick={handleClose} className="">
                <AiOutlineClose size={30} className="text-white" />
              </button>
            </div>
            <div className="my-4">
              <div className="mt-5 w-full flex justify-center items-center">
                {selectedSDGDetails && (
                  <SDGDetailsChart target={selectedSDGDetails} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SDGDetails;
