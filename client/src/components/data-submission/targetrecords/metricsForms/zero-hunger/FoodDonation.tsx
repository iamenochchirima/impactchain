import React, { useState } from "react";
import { toast } from "react-toastify";
import { uploadFile } from "../../../../../config/storage/functions";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import "react-datepicker/dist/react-datepicker.css";
import { styles } from "../../../../../styles/styles";
import FilesInput from "../support/FilesInput";
import { FoodDonation as FoodDonationType } from "../../../../../hooks/declarations/impact_chain_data/impact_chain_data.did";


const FoodDonation = ({ setManualData, setUploadManually }) => {
  const [saving, setSaving] = useState(false);
  const [supportFiles, setSupportFiles] = useState<File[] | null>(null);
  const { storageInitiated } = useSelector((state: RootState) => state.app);
  const [countDown, setCountDown] = useState<number>(0);

  const [programName, setProgramName] = useState<string>("");
  const [programDescription, setProgramDescription] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [totalDonatedFood, setTotalDonatedFood] = useState("");
  const [numberOfBeneficiaries, setNumberOfBeneficiaries] = useState("");
  const [typeOfFoodDonated, setTypeOfFoodDonated] = useState<string>("");
  const [sourcesOfFood, setSourcesOfFood] = useState<string>("");
  const [storageFacilities, setStorageFacilities] = useState<string>("");
  const [distributionMethods, setDistributionMethods] = useState<string>("");
  const [foodSafetyStandards, setFoodSafetyStandards] = useState<string>("");
  const [communityImpact, setCommunityImpact] = useState<string>("");
  const [feedbackFromRecipients, setFeedbackFromRecipients] =
    useState<string>("");
  const [challengesFaced, setChallengesFaced] = useState<string>("");

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

      const jobTrainingProgram: FoodDonationType = {
        programName: programName,
        programDescription: programDescription,
        startDate: BigInt(startDateMilliseconds),
        endDate: BigInt(endDateMilliseconds),
        location: location,
        totalDonatedFood: BigInt(totalDonatedFood),
        numberOfBeneficiaries: BigInt(numberOfBeneficiaries),
        typeOfFoodDonated: typeOfFoodDonated,
        sourcesOfFood: sourcesOfFood,
        storageFacilities: storageFacilities,
        distributionMethods: distributionMethods,
        foodSafetyStandards: foodSafetyStandards,
        communityImpact: communityImpact,
        feedbackFromRecipients: feedbackFromRecipients,
        challengesFaced: challengesFaced,
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
      const file_path = location;
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
            value={programName}
            onChange={(e) => setProgramName(e.target.value)}
            required
          />
        </div>

        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Program Description</label>
          <textarea
            className={`${styles.formInput}`}
            id="programDescription"
            placeholder="Program Description"
            value={programDescription}
            onChange={(e) => setProgramDescription(e.target.value)}
            required
            style={{ overflow: "hidden" }}
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
          <label htmlFor={`${styles.inputLabel}`}>Total Donated Food</label>
          <input
            className={`${styles.formInput}`}
            id="totalDonatedFood"
            type="number"
            placeholder="Total Donated Food"
            value={totalDonatedFood}
            onChange={(e) => setTotalDonatedFood(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>
            Number of Beneficiaries
          </label>
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
          <label htmlFor={`${styles.inputLabel}`}>Type of Food Donated</label>
          <input
            className={`${styles.formInput}`}
            id="typeOfFoodDonated"
            type="string"
            placeholder="Type of Food Donated"
            value={typeOfFoodDonated}
            onChange={(e) => setTypeOfFoodDonated(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Sources of Food</label>
          <input
            className={`${styles.formInput}`}
            id="sourcesOfFood"
            type="string"
            placeholder="Sources of Food"
            value={sourcesOfFood}
            onChange={(e) => setSourcesOfFood(e.target.value)}
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Storage Facilities</label>
          <input
            className={`${styles.formInput}`}
            id="storageFacilities"
            type="string"
            placeholder="Storage Facilities"
            value={storageFacilities}
            onChange={(e) => setStorageFacilities(e.target.value)}
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Distribution Methods</label>
          <input
            className={`${styles.formInput}`}
            id="distributionMethods"
            type="string"
            placeholder="Distribution Methods"
            value={distributionMethods}
            onChange={(e) => setDistributionMethods(e.target.value)}
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Food Safety Standards</label>
          <input
            className={`${styles.formInput}`}
            id="foodSafetyStandards"
            type="string"
            placeholder="Food Safety Standards"
            value={foodSafetyStandards}
            onChange={(e) => setFoodSafetyStandards(e.target.value)}
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Community Impact</label>
          <input
            className={`${styles.formInput}`}
            id="communityImpact"
            type="string"
            placeholder="Community Impact"
            value={communityImpact}
            onChange={(e) => setCommunityImpact(e.target.value)}
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>
            Feedback from Recipients
          </label>
          <input
            className={`${styles.formInput}`}
            id="feedbackFromRecipients"
            type="string"
            placeholder="Feedback from Recipients"
            value={feedbackFromRecipients}
            onChange={(e) => setFeedbackFromRecipients(e.target.value)}
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Challenges Faced</label>
          <input
            className={`${styles.formInput}`}
            id="challengesFaced"
            type="string"
            placeholder="Challenges Faced"
            value={challengesFaced}
            onChange={(e) => setChallengesFaced(e.target.value)}
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

export default FoodDonation;
