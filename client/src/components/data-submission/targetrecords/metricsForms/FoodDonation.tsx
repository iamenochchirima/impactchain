import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { uploadFile } from "../../../../config/storage/functions";
import { useSelector } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { RootState } from "../../../../redux/store";
import "react-datepicker/dist/react-datepicker.css";
import { styles } from "../../../../styles/styles";
import FilesInput from "./support/FilesInput";
import { FoodDonation as FoodDonationType } from "../../../../hooks/declarations/impact_chain_data/impact_chain_data.did";

type FormData = {
  programName: string;
  programDescription: string;
  startDate: string;
  endDate: string;
  location: string;
  totalDonatedFood: number;
  numberOfBeneficiaries: number;
  typeOfFoodDonated: string;
  sourcesOfFood: string;
  storageFacilities: string;
  distributionMethods: string;
  foodSafetyStandards: string;
  communityImpact: string;
  feedbackFromRecipients: string;
  challengesFaced: string;
};

const FoodDonation = ({ setManualData, setUploadManually }) => {
  const [saving, setSaving] = useState(false);
  const [supportFiles, setSupportFiles] = useState<File[] | null>(null);
  const { storageInitiated } = useSelector((state: RootState) => state.app);
  const [countDown, setCountDown] = useState<number>(0);

  const schema = z.object({
    programName: z
      .string()
      .min(1, { message: "Name must be at least 2 characters long" })
      .max(200, { message: "Name must be at most 200 characters long" }),
    programDescription: z
      .string()
      .min(1, {
        message: "Description must be at least 2 characters long",
      })
      .max(500, { message: "Description must be at most 500 characters long" }),
    startDate: z.string().min(1, { message: "Start Date is required" }),
    endDate: z.string(),
    location: z
      .string()
      .min(1, { message: "Location is required" })
      .max(200, { message: "Location must be at most 200 characters long" }),
    totalDonatedFood: z
      .string()
      .min(1, { message: "Total Donated Food is required" })
      .max(200, {
        message: "Total Donated Food must be at most 200 characters long",
      }),
    numberOfBeneficiaries: z
      .number()
      .min(1, { message: "Number of Beneficiaries is required" })
      .max(200, {
        message: "Number of Beneficiaries must be at most 200 characters long",
      }),
    typeOfFoodDonated: z
      .string()
      .min(1, { message: "Type of Food Donated is required" })
      .max(200, {
        message: "Type of Food Donated must be at most 200 characters long",
      }),
    sourcesOfFood: z
      .string()
      .min(1, { message: "Sources of Food is required" })
      .max(200, {
        message: "Sources of Food must be at most 200 characters long",
      }),
    storageFacilities: z
      .string()
      .min(1, { message: "Storage Facilities is required" })
      .max(200, {
        message: "Storage Facilities must be at most 200 characters long",
      }),
    distributionMethods: z
      .string()
      .min(1, { message: "Distribution Methods is required" })
      .max(200, {
        message: "Distribution Methods must be at most 200 characters long",
      }),
    foodSafetyStandards: z
      .string()
      .min(1, { message: "Food Safety Standards is required" })
      .max(200, {
        message: "Food Safety Standards must be at most 200 characters long",
      }),
    communityImpact: z
      .string()
      .min(1, { message: "Community Impact is required" })
      .max(200, {
        message: "Community Impact must be at most 200 characters long",
      }),
    feedbackFromRecipients: z
      .string()
      .min(1, { message: "Feedback From Recipients is required" })
      .max(200, {
        message: "Feedback From Recipients must be at most 200 characters long",
      }),
    challengesFaced: z
      .string()
      .min(1, { message: "Challenges Faced is required" })
      .max(200, {
        message: "Challenges Faced must be at most 200 characters long",
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

      const jobTrainingProgram: FoodDonationType = {
        programName: data.programName,
        programDescription: data.programDescription,
        startDate: BigInt(startDateMilliseconds),
        endDate: BigInt(endDateMilliseconds),
        location: data.location,
        totalDonatedFood: BigInt(data.totalDonatedFood),
        numberOfBeneficiaries: BigInt(data.numberOfBeneficiaries),
        typeOfFoodDonated: data.typeOfFoodDonated,
        sourcesOfFood: data.sourcesOfFood,
        storageFacilities: data.storageFacilities,
        distributionMethods: data.distributionMethods,
        foodSafetyStandards: data.foodSafetyStandards,
        communityImpact: data.communityImpact,
        feedbackFromRecipients: data.feedbackFromRecipients,
        challengesFaced: data.challengesFaced,
        dataVerification: false,
        supportingFiles: urls ? urls : [],
        created: BigInt(Date.now()),
      };
      setManualData(jobTrainingProgram);
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
            Food Donation Program Information
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
            id="programDescription"
            placeholder="Program Description"
            {...register("programDescription")}
            style={{ overflow: "hidden" }}
          />
          <p className={`${styles.errorP}`}>
            {errors.programDescription?.message}
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
          <p className={`${styles.errorP}`}>{errors.location?.message}</p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Total Donated Food</label>
          <input
            className={`${styles.formInput}`}
            id="totalDonatedFood"
            type="number"
            placeholder="Total Donated Food"
            {...register("totalDonatedFood")}
          />
          <p className={`${styles.errorP}`}>{errors.totalDonatedFood?.message}</p>
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
          <p className={`${styles.errorP}`}>{errors.numberOfBeneficiaries?.message}</p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Type of Food Donated</label>
          <input
            className={`${styles.formInput}`}
            id="typeOfFoodDonated"
            type="string"
            placeholder="Type of Food Donated"
            {...register("typeOfFoodDonated")}
          />
          <p className={`${styles.errorP}`}>{errors.typeOfFoodDonated?.message}</p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Sources of Food</label>
          <input
            className={`${styles.formInput}`}
            id="sourcesOfFood"
            type="string"
            placeholder="Sources of Food"
            {...register("sourcesOfFood")}
          />
          <p className={`${styles.errorP}`}>{errors.sourcesOfFood?.message}</p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Storage Facilities</label>
          <input
            className={`${styles.formInput}`}
            id="storageFacilities"
            type="string"
            placeholder="Storage Facilities"
            {...register("storageFacilities")}
          />
          <p className={`${styles.errorP}`}>{errors.storageFacilities?.message}</p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Distribution Methods</label>
          <input
            className={`${styles.formInput}`}
            id="distributionMethods"
            type="string"
            placeholder="Distribution Methods"
            {...register("distributionMethods")}
          />
          <p className={`${styles.errorP}`}>{errors.distributionMethods?.message}</p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Food Safety Standards</label>
          <input
            className={`${styles.formInput}`}
            id="foodSafetyStandards"
            type="string"
            placeholder="Food Safety Standards"
            {...register("foodSafetyStandards")}
          />
          <p className={`${styles.errorP}`}>{errors.foodSafetyStandards?.message}</p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Community Impact</label>
          <input
            className={`${styles.formInput}`}
            id="communityImpact"
            type="string"
            placeholder="Community Impact"
            {...register("communityImpact")}
          />
          <p className={`${styles.errorP}`}>{errors.communityImpact?.message}</p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Feedback From Recipients</label>
          <input
            className={`${styles.formInput}`}
            id="feedbackFromRecipients"
            type="string"
            placeholder="Feedback From Recipients"
            {...register("feedbackFromRecipients")}
          />
          <p className={`${styles.errorP}`}>{errors.feedbackFromRecipients?.message}</p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Challenges Faced</label>
          <input
            className={`${styles.formInput}`}
            id="challengesFaced"
            type="string"
            placeholder="Challenges Faced"
            {...register("challengesFaced")}
          />
          <p className={`${styles.errorP}`}>{errors.challengesFaced?.message}</p>
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

export default FoodDonation;
