


import React, { useState } from "react";
import { toast } from "react-toastify";
import { uploadFile } from "../../../../../config/storage/functions";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import "react-datepicker/dist/react-datepicker.css";
import { styles } from "../../../../../styles/styles";
import FilesInput from "../support/FilesInput";
import { MicroloanProgram } from "../../../../../hooks/declarations/data/data.did";

const  MircroloansProgram = ({ setManualData, setUploadManually }) => {
  const [saving, setSaving] = useState(false);
  const [supportFiles, setSupportFiles] = useState<File[] | null>(null);
  const { storageInitiated } = useSelector((state: RootState) => state.app);
  const [countDown, setCountDown] = useState<number>(0);

  const [programName, setProgramName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [totalBudget, setTotalBudget] = useState("");
  const [fundingSource, setFundingSource] = useState<string>("");
  const [numberOfBeneficiaries, setNumberOfBeneficiaries] = useState("");
  const [averageLoanAmount, setAverageLoanAmount] = useState("");
  const [disbursementMethod, setDisbursementMethod] = useState<string>("");
  const [repaymentRate, setRepaymentRate] = useState<string>("");
  const [economicImpact, setEconomicImpact] = useState<string>("");
  const [beneficiaryFeedback, setBeneficiaryFeedback] = useState<string>("");
  const [programChallenges, setProgramChallenges] = useState<string>("");



  const handleSave = async () => {
    try {
      setSaving(true);
      const checkedFiles: File[] = [];
      if (supportFiles) {
        for (const file of supportFiles) {
          if (file.size <= 4 * 1024 * 1024) {
            checkedFiles.push(file);
          }
        }
      }

      if (checkedFiles.length === 0) {
        toast.error("Please upload support documents", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        });
        setSaving(false);
        return;
      }

      const urls = await uploadAsset(checkedFiles);

      const startDateMilliseconds = new Date(startDate).getTime();
      const endDateMilliseconds = new Date(endDate).getTime();

      const microloanProgram: MicroloanProgram = {
        programName: programName,
        description: description,
        startDate: BigInt(startDateMilliseconds),
        endDate: BigInt(endDateMilliseconds),
        location: location,
        totalBudget: BigInt(totalBudget),
        fundingSource: fundingSource,
        numberOfBeneficiaries: BigInt(numberOfBeneficiaries),
        averageLoanAmount: BigInt(averageLoanAmount),
        disbursementMethod: disbursementMethod,
        repaymentRate: repaymentRate,
        economicImpact: economicImpact,
        beneficiaryFeedback: beneficiaryFeedback,
        programChallenges: programChallenges,
        dataVerification: false,
        supportingFiles: urls ? urls : [],
        created: BigInt(Date.now()),
      };
      setManualData(microloanProgram);
      setUploadManually(false);
      setSaving(false);
    } catch (error) {
        setSaving(false);
      console.log("Error saving job training program", error);
    }
  };

  const uploadAsset = async (files: File[]) => {
    if (storageInitiated) {
      const file_path = location
      try {
        const urls: string[] = [];
        setCountDown((prev) => prev + files.length);
        for (const file of files) {
          const assetUrl = await uploadFile(file, file_path);
          console.log(
            "This file was successfully uploaded:",
            file.name,
            assetUrl
          );
          urls.push(assetUrl);
          setCountDown((prev) => prev - 1);
        }
        return urls;
      } catch (error) {
        setSaving(false);
        console.error("Error uploading files:", error);
      }
    }
  };

  return (
    <div>
      <form className={`${styles.munualDataForm}`}>
        <div className={`${styles.formHeader}`}>
          <h3 className={`${styles.formTitle}`}>
            Microloans Program Data Submission
          </h3>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Program Name</label>
          <input
            className={`${styles.formInput}`}
            id="programName"
            type="string"
            placeholder="Program Name"
            value={programName}
            onChange={(e) => setProgramName(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Program Description</label>
          <textarea
            className={`${styles.formInput}`}
            id="description"
            placeholder="Program Description"
            style={{ overflow: "hidden" }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Start Date</label>
          <input
            className={`${styles.formInput}`}
            id="startDate"
            type="date"
            placeholder="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>End Date</label>
          <input
            className={`${styles.formInput}`}
            id="endDate"
            type="date"
            placeholder="End Date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Location</label>
          <input
            className={`${styles.formInput}`}
            id="location"
            type="string"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Total Budget</label>
          <input
            className={`${styles.formInput}`}
            id="totalBudget"
            type="number"
            placeholder="Total Budget"
            value={totalBudget}
            onChange={(e) => setTotalBudget(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Funding Source</label>
          <input
            className={`${styles.formInput}`}
            id="fundingSource"
            type="string"
            placeholder="Funding Source"
            value={fundingSource}
            onChange={(e) => setFundingSource(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Number of Beneficiaries</label>
          <input
            className={`${styles.formInput}`}
            id="numberOfBeneficiaries"
            type="number"
            placeholder="Number of Beneficiaries"
            value={numberOfBeneficiaries}
            onChange={(e) => setNumberOfBeneficiaries(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Average Loan Amount</label>
          <input
            className={`${styles.formInput}`}
            id="averageLoanAmount"
            type="number"
            placeholder="Average Loan Amount"
            value={averageLoanAmount}
            onChange={(e) => setAverageLoanAmount(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Disbursement Method</label>
          <input
            className={`${styles.formInput}`}
            id="disbursementMethod"
            type="string"
            placeholder="Disbursement Method"
            value={disbursementMethod}
            onChange={(e) => setDisbursementMethod(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Repayment Rate</label>
          <input
            className={`${styles.formInput}`}
            id="repaymentRate"
            type="string"
            placeholder="Repayment Rate"
            value={repaymentRate}
            onChange={(e) => setRepaymentRate(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Economic Impact</label>
          <input
            className={`${styles.formInput}`}
            id="economicImpact"
            type="string"
            placeholder="Economic Impact"
            value={economicImpact}
            onChange={(e) => setEconomicImpact(e.target.value)}
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Beneficiary Feedback</label>
          <input
            className={`${styles.formInput}`}
            id="beneficiaryFeedback"
            type="string"
            placeholder="Beneficiary Feedback"
            value={beneficiaryFeedback}
            onChange={(e) => setBeneficiaryFeedback(e.target.value)}
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Program Challenges</label>
          <input
            className={`${styles.formInput}`}
            id="programChallenges"
            type="string"
            placeholder="Program Challenges"
            value={programChallenges}
            onChange={(e) => setProgramChallenges(e.target.value)}
          />
        </div>
      </form>

      <FilesInput {...{ setSupportFiles, supportFiles }} />

      <div className="flex justify-between items-center py-4">
        <button
          onClick={() => setUploadManually(false)}
          className={`${styles.roundedButton}`}
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          disabled={saving}
          className={`${styles.roundedButton}`}
        >
          {saving ? `Uploading ${countDown}` : "Save"}
        </button>
      </div>
    </div>
  );
};

export default  MircroloansProgram;
