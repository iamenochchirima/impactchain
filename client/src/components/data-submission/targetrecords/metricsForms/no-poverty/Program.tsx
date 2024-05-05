import { IoIosRemove } from "react-icons/io";

const Program = ({ program, programs, setPrograms }) => {
  const handleRemove = () => {
    setPrograms(programs.filter((p) => p.programName !== program.programName));
  };
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3 items-center ">
        <h3 className="text-white">{program.programName}</h3>
        <p className="text-white">
          {new Date(Number(program.startDate)).toDateString()} -{" "}
          {program.duration}
        </p>
      </div>
      <button
        onClick={handleRemove}
        className="text-red-200 flex items-center gap-1"
      >
        <IoIosRemove />
        <span>Remove</span>
      </button>
    </div>
  );
};

export default Program;
