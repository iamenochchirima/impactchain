


import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { uploadFile } from "../../../../../config/storage/functions";
import { useSelector } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { RootState } from "../../../../../redux/store";
import "react-datepicker/dist/react-datepicker.css";
import { styles } from "../../../../../styles/styles";
import FilesInput from "../support/FilesInput";
import { MicroloanProgram } from "../../../../../hooks/declarations/impact_chain_data/impact_chain_data.did";


type FormData = {
  programName : string;
  description : string;
  startDate : string;
  endDate : string;
  location : string;
  totalBudget : number
  fundingSource : string;
  numberOfBeneficiaries : number
  averageLoanAmount : number
  disbursementMethod : string;
  repaymentRate : string;
  economicImpact : string;
  beneficiaryFeedback : string;
  programChallenges : string;
};

const  MircroloansProgram = ({ setManualData, setUploadManually }) => {
  const [saving, setSaving] = useState(false);
  const [supportFiles, setSupportFiles] = useState<File[] | null>(null);
  const { storageInitiated } = useSelector((state: RootState) => state.app);
  const [countDown, setCountDown] = useState<number>(0);

  const schema = z.object({
    programName: z
      .string()
      .min(1, { message: "Name must be at least 2 characters long" })
      .max(200, { message: "Name must be at most 200 characters long" }),
    description: z
      .string()
      .min(1, {
        message: "Description must be at least 2 characters long",
      })
      .max(500, { message: "Description must be at most 500 characters long" }),
    startDate: z.string().min(1, { message: "Start Date is required" }),
    endDate: z.string(),
    location: z.string().min(1, { message: "Location is required" }),
    totalBudget: z
      .string()
      .min(1, { message: "Total budget is required" })
      .max(100, {
        message: "Total budget must be at most 100 characters long",
      }),
    fundingSource: z 
      .string()
      .min(1, { message: "Funding source is required" })
      .max(100, {
        message: "Funding source must be at most 100 characters long",
      }),
    numberOfBeneficiaries: z
      .string()
      .min(1, { message: "Number of beneficiaries is required" })
      .max(100, {
        message: "Number of beneficiaries must be at most 100 characters long",
      }),
    averageLoanAmount: z
      .string()
      .min(1, { message: "Average loan amount is required" })
      .max(100, {
        message: "Average loan amount must be at most 100 characters long",
      }),
    disbursementMethod: z
      .string()
      .min(1, { message: "Disbursement method is required" })
      .max(100, {
        message: "Disbursement method must be at most 100 characters long",
      }),
    repaymentRate: z
      .string()
      .min(1, { message: "Repayment rate is required" })
      .max(100, {
        message: "Repayment rate must be at most 100 characters long",
      }),
    economicImpact: z
      .string()
      .min(1, { message: "Economic impact is required" })
      .max(500, {
        message: "Economic impact must be at most 100 characters long",
      }),
    beneficiaryFeedback: z
      .string()
      .min(1, { message: "Beneficiary feedback is required" })
      .max(500, {
        message: "Beneficiary feedback must be at most 100 characters long",
      }),
    programChallenges: z
      .string()
      .min(1, { message: "Program challenges is required" })
      .max(500, {
        message: "Program challenges must be at most 100 characters long",
      }),

      
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const handleSave = async (data: FormData) => {
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

      const startDateMilliseconds = new Date(data.startDate).getTime();
      const endDateMilliseconds = new Date(data.endDate).getTime();

      const microloanProgram: MicroloanProgram = {
        programName: data.programName,
        description: data.description,
        startDate: BigInt(startDateMilliseconds),
        endDate: BigInt(endDateMilliseconds),
        location: data.location,
        totalBudget: BigInt(data.totalBudget),
        fundingSource: data.fundingSource,
        numberOfBeneficiaries: BigInt(data.numberOfBeneficiaries),
        averageLoanAmount: BigInt(data.averageLoanAmount),
        disbursementMethod: data.disbursementMethod,
        repaymentRate: data.repaymentRate,
        economicImpact: data.economicImpact,
        beneficiaryFeedback: data.beneficiaryFeedback,
        programChallenges: data.programChallenges,
        dataVerification: false,
        supportingFiles: urls ? urls : [],
        created: BigInt(Date.now()),
      };
      setManualData(microloanProgram);
      setUploadManually(false);
    } catch (error) {
        setSaving(false);
      console.log("Error saving job training program", error);
    }
  };

  const uploadAsset = async (files: File[]) => {
    if (storageInitiated) {
      const file_path = location.pathname;
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
            {...register("programName")}
          />
          <p className={`${styles.errorP}`}>{errors.programName?.message}</p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Program Description</label>
          <textarea
            className={`${styles.formInput}`}
            id="description"
            placeholder="Program Description"
            {...register("description")}
            style={{ overflow: "hidden" }}
          />
          <p className={`${styles.errorP}`}>
            {errors.description?.message}
          </p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Start Date</label>
          <input
            className={`${styles.formInput}`}
            id="startDate"
            type="date"
            placeholder="Start Date"
            {...register("startDate")}
          />
          <p className={`${styles.errorP}`}>{errors.startDate?.message}</p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>End Date</label>
          <input
            className={`${styles.formInput}`}
            id="endDate"
            type="date"
            placeholder="End Date"
            {...register("endDate")}
          />
          <p className={`${styles.errorP}`}>{errors.endDate?.message}</p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Program Location</label>
          <input
            className={`${styles.formInput}`}
            id="location"
            type="string"
            placeholder="Program Location"
            {...register("location")}
          />
          <p className={`${styles.errorP}`}>
            {errors.location?.message}
          </p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Total Budget</label>
          <input
            className={`${styles.formInput}`}
            id="totalBudget"
            type="number"
            placeholder="Total Budget"
            {...register("totalBudget")}
          />
          <p className={`${styles.errorP}`}>
            {errors.totalBudget?.message}
          </p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Funding Source</label>
          <input
            className={`${styles.formInput}`}
            id="fundingSource"
            type="string"
            placeholder="Funding Source"
            {...register("fundingSource")}
          />
          <p className={`${styles.errorP}`}>
            {errors.fundingSource?.message}
          </p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Number of Beneficiaries</label>
          <input
            className={`${styles.formInput}`}
            id="numberOfBeneficiaries"
            type="number"
            placeholder="Number of Beneficiaries"
            {...register("numberOfBeneficiaries")}
          />
          <p className={`${styles.errorP}`}>
            {errors.numberOfBeneficiaries?.message}
          </p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Average Loan Amount</label>
          <input
            className={`${styles.formInput}`}
            id="averageLoanAmount"
            type="number"
            placeholder="Average Loan Amount"
            {...register("averageLoanAmount")}
          />
          <p className={`${styles.errorP}`}>
            {errors.averageLoanAmount?.message}
          </p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Disbursement Method</label>
          <input
            className={`${styles.formInput}`}
            id="disbursementMethod"
            type="string"
            placeholder="Disbursement Method"
            {...register("disbursementMethod")}
          />
          <p className={`${styles.errorP}`}>
            {errors.disbursementMethod?.message}
          </p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Repayment Rate</label>
          <input
            className={`${styles.formInput}`}
            id="repaymentRate"
            type="string"
            placeholder="Repayment Rate"
            {...register("repaymentRate")}
          />
          <p className={`${styles.errorP}`}>
            {errors.repaymentRate?.message}
          </p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Economic Impact</label>
          <textarea
            className={`${styles.formInput}`}
            id="economicImpact"
            placeholder="Economic Impact"
            {...register("economicImpact")}
            style={{ overflow: "hidden" }}
          />
          <p className={`${styles.errorP}`}>
            {errors.economicImpact?.message}
          </p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Beneficiary Feedback</label>
          <textarea
            className={`${styles.formInput}`}
            id="beneficiaryFeedback"
            placeholder="Beneficiary Feedback"
            {...register("beneficiaryFeedback")}
            style={{ overflow: "hidden" }}
          />
          <p className={`${styles.errorP}`}>
            {errors.beneficiaryFeedback?.message}
          </p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Program Challenges</label>
          <textarea
            className={`${styles.formInput}`}
            id="programChallenges"
            placeholder="Program Challenges"
            {...register("programChallenges")}
            style={{ overflow: "hidden" }}
          />
          <p className={`${styles.errorP}`}>
            {errors.programChallenges?.message}
          </p>
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
          onClick={handleSubmit(handleSave)}
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
