import React, { useState, FunctionComponent } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { formatDate } from "../../../utils/time";
import { RoportModalRequest, setReportModal } from "../../../redux/slices/app";
import { pdfjs, Document, Page } from 'react-pdf';
import { PDFDocumentProxy, PDFPageProxy } from 'pdfjs-dist'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface PdfTextExtractorProps {
    file: string | File | ArrayBuffer; 
  }
  


const Report = () => {
    const [text, setText] = useState<string>('');
  const dispatch = useDispatch();
  const { userRecord, reportCategory, reportMetric, userInfo } = useSelector(
    (state: RootState) => state.app
  );

  const handleClose = () => {
    const req: RoportModalRequest = {
      reportModal: false,
      reportMetric: null,
      reportCategory: null,
    };
    dispatch(setReportModal(req));
  };

  return (
    <div className="fixed z-50  inset-0 text-white overflow-y-auto bg-black bg-opacity-75">
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-TelegraphRegular">
        <div className="bg-custom-gray fixed rounded-xl mx-10 w-[90%] sm:w-3/4 md:w-[60%] px-6 py-2 min-w-min max-w-full ">
          <div className="mb-10">
            <div className="flex justify-between items-center">
              <img
                src={userRecord ? "i.c.logo2.png" : "i.c.logo2.png"}
                alt="logo-image"
                className="h-20 w-20"
              />
              <h3 className="text-3xl font-bold text-white mt-4 text-center font-TelegraphBold">
                {userRecord?.aboutCompany.name}
              </h3>
              <button onClick={handleClose} className="">
                <AiOutlineClose size={30} className="text-white" />
              </button>
            </div>
            <div className="flex flex-col gap-1 my-3">
              <span> {`${userInfo.firstname} ${userInfo.lastname} `} </span>
              <span>
                {userRecord ? formatDate(Number(userRecord.created)) : 0}
              </span>
            </div>
            <hr className="border-2 border-white" />
            <div className="my-4 flex justify-between">
              <h3 className="text-xl">{reportCategory?.title}</h3>
              <button
                className="bg-custom-green px-4 py-1.5 rounded-3xl text-black font-bold"
                onClick={() => console.log("Download report")}
              >
                Download Report
              </button>
            </div>
            <div className="w-full">
              <div className="bg-black rounded-3xl w-full p-4">
                <h3>{reportMetric?.name}</h3>
                <div className="mx-3"></div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3 mt-5">
              <img
                src="i.c.logo2.png"
                alt="logo-image"
                className="h-10 w-10 border rounded-full border-white"
              />
              <div className="">
                <span>
                  <span className="text-custom-green">impact.</span>
                  <span>chain</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
