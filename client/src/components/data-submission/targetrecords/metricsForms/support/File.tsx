import React, { FC, useEffect, useState } from "react";

type Props = {
  file: File;
  handleRemove: (name: string) => void;
};

const File: FC<Props> = ({ file, handleRemove }) => {
  const [tooBig, setTooBig] = useState(false);

  const MAX_FILE_SIZE = 4 * 1024 * 1024;

  useEffect(() => {
    if (file.size > MAX_FILE_SIZE) {
      setTooBig(true);
    }
  }, [file.size, setTooBig, MAX_FILE_SIZE]);

  const remove = () => {
    handleRemove(file.name);
    if (tooBig) {
      setTooBig(false);
    }
  }

  return (
    <div
      className={` ${
        tooBig ? "bg-red-800" : "bg-gray-800"
      } flex justify-between items-center gap-3  p-2 rounded`}
    >
      <div className="flex flex-col">
        <span className="text-white">{file.name}</span>
        {tooBig && <span className="text-red-500 text-sm">File too big, it won't be uploaded.
        </span>}
      </div>
      <button
        onClick={remove}
        className={`${tooBig ? "text-white" : "text-custom-green"}`}
      >
        Remove
      </button>
    </div>
  );
};

export default File;
