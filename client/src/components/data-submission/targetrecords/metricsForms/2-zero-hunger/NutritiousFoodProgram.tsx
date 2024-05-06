import React, { useState } from "react";
import { toast } from "react-toastify";
import { uploadFile } from "../../../../../config/storage/functions";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import "react-datepicker/dist/react-datepicker.css";
import { styles } from "../../../../../styles/styles";
import FilesInput from "../support/FilesInput";
import { NutritiousFoodProgram as NutritiousFoodProgramType } from "../../../../../hooks/declarations/data/data.did";

const NutritiousFoodProgram = ({ setManualData, setUploadManually }) => {
    const [saving, setSaving] = useState(false);
    const [supportFiles, setSupportFiles] = useState<File[] | null>(null);
    const { storageInitiated } = useSelector((state: RootState) => state.app);
    const [countDown, setCountDown] = useState<number>(0);

    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
    const [location, setLocation] = useState<string>("");
  
    const [programName, setProgramName] = useState<string>("");
    const [programDescription, setProgramDescription] = useState<string>("");
    const [nutritionalContent, setNutritionalContent] = useState<string>("");
    const [totalParticipants, setTotalParticipants] = useState("");
    const [mealsProvided, setMealsProvided] = useState("");
    const [sourceOfFood, setSourceOfFood] = useState<string>("");
    const [typeOfMeals, setTypeOfMeals] = useState<string>("");
    const [frequencyOfMeals, setFrequencyOfMeals] = useState<string>("");
    const [challengesFaced, setChallengesFaced] = useState<string>("");
    const [participantFeedback, setParticipantFeedback] = useState<string>("");
    const [impactOnHealth, setImpactOnHealth] = useState<string>("");
  
    const handleSubmit = async () => {
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
  
        const NutritiousFoodProgram: NutritiousFoodProgramType = {
          programName: programName,
          programDescription: programDescription,
          startDate: BigInt(startDateMilliseconds),
          endDate: BigInt(endDateMilliseconds),
          location: location,

          nutritionalContent: nutritionalContent,
          totalParticipants: BigInt(totalParticipants),
          sourceOfFood: sourceOfFood,
          mealsProvided: BigInt(mealsProvided),
          typeOfMeals: typeOfMeals,
          frequencyOfMeals: frequencyOfMeals,
          challengesFaced: challengesFaced,
          impactOnHealth: impactOnHealth,
          participantFeedback: participantFeedback,

          dataVerification: false,
          supportingFiles: urls ? urls : [],
          created: BigInt(Date.now()),
        };
        setManualData(NutritiousFoodProgram);
        setUploadManually(false);
      } catch (error) {
          setSaving(false);
        console.log("Error saving nutritious food program", error);
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
            <h3 className={`${styles.formTitle}`}>Nutritious Food Program</h3>
          </div>
          <div className={`${styles.inputDiv}`}>
            <label htmlFor={`${styles.inputLabel}`}>Program Name</label>
            <input
              className={`${styles.formInput}`}
              id="programName"
              type="text"
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
              required
              onChange={(e) => setStartDate(e.target.value)}
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
            <label htmlFor={`${styles.inputLabel}`}> Location</label>
            <input
              className={`${styles.formInput}`}
              id="location"
              type="text"
              placeholder=" Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className={`${styles.inputDiv}`}>
            <label htmlFor={`${styles.inputLabel}`}>Nutritional Content</label>
            <input
              className={`${styles.formInput}`}
              id="nutritionalContent"
              type="text"
              placeholder="Nutritional Content"
              value={nutritionalContent}
              onChange={(e) => setNutritionalContent(e.target.value)}
              required
            />
          </div>
          <div className={`${styles.inputDiv}`}>
            <label htmlFor={`${styles.inputLabel}`}> Total Number of Participants</label>
            <input
              className={`${styles.formInput}`}
              id="totalParticipants"
              type="number"
              placeholder=" Total Number of Participants"
              value={totalParticipants}
              onChange={(e) => setTotalParticipants(e.target.value)}
              required
            />
          </div>
          <div className={`${styles.inputDiv}`}>
            <label htmlFor={`${styles.inputLabel}`}>Amount of Meals Provided</label>
            <input
              className={`${styles.formInput}`}
              id="mealsProvided"
              type="number"
              placeholder="Amount of Meals Provided"
              value={mealsProvided}
              onChange={(e) => setMealsProvided(e.target.value)}
              required
            />
          </div>
          <div className={`${styles.inputDiv}`}>
            <label htmlFor={`${styles.inputLabel}`}>Source of Food</label>
            <input
              className={`${styles.formInput}`}
              id="sourceOfFood"
              type="text"
              placeholder="Source of Food"
              value={sourceOfFood}
              onChange={(e) => setSourceOfFood(e.target.value)}
              required
            />
          </div>
          <div className={`${styles.inputDiv}`}>
            <label htmlFor={`${styles.inputLabel}`}>Type of Meals</label>
            <input
              className={`${styles.formInput}`}
              id="typeOfMeals"
              type="text"
              placeholder="Type of Meals"
              value={typeOfMeals}
              onChange={(e) => setTypeOfMeals(e.target.value)}
              required
            />
          </div>
          <div className={`${styles.inputDiv}`}>
            <label htmlFor={`${styles.inputLabel}`}>Frequency Of Meals</label>
            <input
              className={`${styles.formInput}`}
              id="frequencyOfMeals"
              type="text"
              placeholder="How Often are Meals Provided"
              value={frequencyOfMeals}
              onChange={(e) => setFrequencyOfMeals(e.target.value)}
              required
            />
          </div>
          <div className={`${styles.inputDiv}`}>
            <label htmlFor={`${styles.inputLabel}`}>The Challenges Faced</label>
            <input
              className={`${styles.formInput}`}
              id="challengesFaced"
              type="text"
              placeholder="Challenges Faced"
              value={challengesFaced}
              onChange={(e) => setChallengesFaced(e.target.value)}
              required
            />
          </div>
          <div className={`${styles.inputDiv}`}>
            <label htmlFor={`${styles.inputLabel}`}>The Impact on Health</label>
            <input
              className={`${styles.formInput}`}
              id="impactOnHealth"
              type="text"
              placeholder="Impact on Health"
              value={impactOnHealth}
              onChange={(e) => setImpactOnHealth(e.target.value)}
              required
            />
          </div>
          <div className={`${styles.inputDiv}`}>
            <label htmlFor={`${styles.inputLabel}`}>Participant Feedback</label>
            <textarea
              className={`${styles.formInput}`}
              id="participantFeedback"
              placeholder="Participant Feedback"
              value={participantFeedback}
              onChange={(e) => setParticipantFeedback(e.target.value)}
              required
              style={{ overflow: "hidden" }}
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
            onClick={handleSubmit}
            disabled={saving}
            className={`${styles.roundedButton}`}
          >
            {saving ? `Uploading ${countDown}` : "Save"}
          </button>
        </div>
      </div>
    );
  };
  
  export default NutritiousFoodProgram;
  