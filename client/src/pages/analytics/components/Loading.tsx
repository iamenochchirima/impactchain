import RiseLoader from "react-spinners/RiseLoader";

const Loading = () => {
  return (
    <div className="flex bg-black text-white justify-center items-center h-screen">
      <span className="flex flex-col items-center gap-4">
        <h3 className="">Getting your report ready!</h3>
        <RiseLoader color="#4FEF64" />
      </span>
    </div>
  );
};

export default Loading;
