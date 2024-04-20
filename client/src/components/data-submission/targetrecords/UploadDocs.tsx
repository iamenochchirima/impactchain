import React, { useState } from "react";
import { toast } from "react-toastify";
import { uploadFile } from "../../../config/storage/functions";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const UploadDocs = ({ setUploadDocs, setDocsUrls }) => {
  const [docs, setDocs] = useState<FileList | null>(null);
  const [saving, setSaving] = useState<boolean>(false);
  const { storageInitiated } = useSelector((state: RootState) => state.app);

  const handleSubmit = async () => {
    if (!docs) {
      toast.error("Please upload a document", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    setSaving(true);
    const urls = await uploadAsset();
    setDocsUrls(urls);
    setUploadDocs(false);
    setSaving(true);
  };

  const uploadAsset = async () => {
    if (storageInitiated && docs) {
      const file_path = location.pathname;
      try {
        const urls: string[] = [];
        for (const doc of docs) {
          const assetUrl = await uploadFile(doc, file_path);
          console.log(
            "This file was successfully uploaded:",
            doc.name,
            assetUrl
          );
          urls.push(assetUrl);
        }
        return urls;
      } catch (error) {
        setSaving(false);
        console.error("Error uploading files:", error);
      }
    }
  };
  return (
    <div className="fixed z-100 inset-0 text-cyan-700 overflow-y-auto bg-black bg-opacity-75">
      <div className=" flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-TelegraphRegular">
        <div
          className={`bg-gray-900 rounded w-full px-6 py-2 min-w-min max-w-[1200px] space-y-8`}
        >
          <div className="flex">
            <div className="flex justify-start w-[100px]">
              <img src="i.c.logo2.png" alt="logo-image" className="h-20 w-20" />
            </div>
            <div className="w-full">
              <h3 className="text-3xl font-bold text-white mt-4 text-center font-TelegraphBold ">
                Upload documentation
              </h3>
              <div className="min-h-[300px]  bg-black rounded-2xl mb-3 mt-8">
                <div className=" justify-center items-center h-full">
                  <div className="flex min-h-[350px] flex-col justify-center items-center">
                    <img src="doc.svg" alt="upload" className="h-20 w-20" />
                    <p className="text-white ">Drag and Drop</p>
                    <span className="text-white">Or</span>
                    <div className="flex justify-center">
                      <input
                        type="file"
                        id="logo"
                        name="logo"
                        multiple
                        onChange={(e) => {
                          setDocs(e.target.files);
                        }}
                        accept="image/*,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/csv"
                        className="hidden"
                      />
                      <button>
                        {" "}
                        <label
                          htmlFor="logo"
                          className=" text-custom-green px-10 py-2 rounded-full cursor-pointer"
                        >
                          Upload
                        </label>
                      </button>
                    </div>
                    {docs && (
                      <div className="flex flex-col gap-2 mt-4">
                        {Array.from(docs).map((doc, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center gap-3 bg-gray-800 p-2 rounded-2xl"
                          >
                            <span className="text-white">{doc.name}</span>
                            <button className="text-white">Remove</button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center py-4">
                <button
                  onClick={() => setUploadDocs(false)}
                  className={`bg-custom-green px-10 py-1.5  rounded-full text-black font-bold`}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={saving}
                  className={`bg-custom-green px-10 py-1.5  rounded-full text-black font-bold`}
                >
                  {saving ? "Uploading" : "Save & Continue"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadDocs;
