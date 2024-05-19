import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setHelpModal } from "../redux/slices/app";

const Help = () => {
  const dispatch = useDispatch();

  return (
    <div
      className={` fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-50`}
    >
      <div className="absolute  top-0 right-0 z-50 w-1/2 h-screen bg-black px-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/question.svg" alt="icon" className="h-8 w-8" />
            <span className="text-2xl">Help</span>
          </div>
          <button
            className="text-xl pb-5 pt-3"
            onClick={() => dispatch(setHelpModal(false))}
          >
            <AiOutlineClose size={30} />
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 bg-custom-gray p-3 border-x border-y border-custom-green rounded-3xl">
            <img src="/bulb.svg" alt="icon" className="w-8 h-8" />
            <div className="flex flex-col gap-3">
              <h1 className="font-bold">Knowledge Base</h1>
              <p>
                Get the most of impact chain by asking our AI all your questions
              </p>
            </div>
          </div>
          <div className="flex gap-3 bg-custom-gray p-3 border-x border-y border-custom-green rounded-3xl">
            <img src="/Books.svg" alt="icon" className="w-8 h-8" />
            <div className="flex flex-col gap-3">
              <h1 className="font-bold">Tutorial</h1>
              <p>
                Get the most of impact chain by asking our AI all your questions
              </p>
            </div>
          </div>
          <div className="flex gap-3 bg-custom-gray p-3 border-x border-y border-custom-green rounded-3xl">
            <img src="/speech.svg" alt="icon" className="w-8 h-8" />
            <div className="flex flex-col gap-3 w-full">
              <h1 className="font-bold">Feedback</h1>
              <div className="flex flex-col justify-center w-full">
                <textarea
                  className="w-full min-h-40 bg-custom-gray border border-custom-green rounded-3xl p-3"
                  placeholder="Enter your feedback here"
                ></textarea>
                <div className="w-full flex justify-end">
                  <button className="bg-custom-green  text-black py-1 rounded-full px-5 mt-3">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
