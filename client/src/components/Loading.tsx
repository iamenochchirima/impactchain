import RiseLoader from "react-spinners/RiseLoader";

const Loading = () => {
  return (
    <div className="flex bg-black text-white justify-center items-center h-screen">
    <span>
    <RiseLoader color="#4FEF64" />
    </span>
  </div>
  );
};

export default Loading;
