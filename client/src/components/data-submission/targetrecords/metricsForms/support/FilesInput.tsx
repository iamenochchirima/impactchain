import React, { FC } from "react";
import File from "./File";

type Props = {
  setSupportFiles: (files: File[]) => void;
  supportFiles: File[] | null;
};

const FilesInput: FC<Props> = ({ setSupportFiles, supportFiles }) => {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files).slice(0, 4);
    setSupportFiles(files);
  };

  const handleRemove = (name: string) => {
    console.log("removing", name);
    if (!supportFiles) return;
    const filteredFiles = supportFiles.filter((file) => file.name !== name);
    setSupportFiles(filteredFiles);
  };

  return (
    <div>
      <h3 className="text-xl font-bold text-white mt-4 text-center font-TelegraphRegular ">
        Please upload any supporting files that will help us verify the data you
        have submitted. You can upload images or PDFs only.
      </h3>
      <div className="min-h-[200px]  bg-black rounded-2xl mb-3 mt-8 font-TelegraphUltraLight font-bold">
        <div className=" justify-center items-center h-full">
          <div className="flex min-h-[200px] py-4 flex-col justify-center items-center">
            <p className="text-white ">Drag and Drop</p>
            <span className="text-white">Or</span>
            <div className="flex justify-center">
              <input
                type="file"
                id="supportFiles"
                multiple
                onChange={handleInputChange}
                accept="image/*,application/pdf"
                className="hidden"
              />
              <button>
                <label
                  htmlFor="supportFiles"
                  className=" text-custom-green px-10 py-2 rounded-full cursor-pointer"
                >
                  Upload
                </label>
              </button>
            </div>
            <span className="text-gray-400"> Max file size: 4MB</span>
            <span className="text-gray-400"> Max files number: 4</span>
            {supportFiles && (
              <div className="flex flex-col gap-2 mt-4">
                {supportFiles.map((file, index) => (
                  <File key={index} {...{ file, handleRemove }} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilesInput;
