
import { useState } from "react";
import { toast } from "react-toastify";
import { uploadFile } from "../../../../../config/storage/functions";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import "react-datepicker/dist/react-datepicker.css";
import { styles } from "../../../../../styles/styles";
import FilesInput from "../support/FilesInput";
import { EducationalGrantsData as EducationalGrantsDataType } from "../../../../../hooks/declarations/data/data.did";


const EducationalGrantsData = ({ setManualData, setUploadManually }) => {
  const [saving, setSaving] = useState(false);
  const [supportFiles, setSupportFiles] = useState<File[] | null>(null);
  const { storageInitiated } = useSelector((state: RootState) => state.app);
  const [countDown, setCountDown] = useState<number>(0);

  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const [programName, setProgramName] = useState<string>("");
  const [programDescription, setProgramDescription] = useState<string>("");

  const [feedbackFromRecipients, setFeedbackFromRecipients] = useState<string>("");
  const [typesOfGrants, setTypesOfGrants] = useState<string>("");
  const [impactOnEducation, setImpactOnEducation] = useState<string>("");
  const [challengesFaced, setChallengesFaced] = useState<string>("");
  const [recipientDemographics, setRecipientDemographics] = useState<string>("");
  const [averageGrantAmount, setAverageGrantAmount] = useState("");
  const [totalGrantsAwarded, setTotalGrantsAwarded] = useState("");
  const [totalAmountAwarded, setTotalAmountAwarded] = useState("");
  

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

      // const EducationalGrantsData : EducationalGrantsDataType = {
      //   startDate: BigInt(startDateMilliseconds),
      //   endDate: BigInt(endDateMilliseconds),
      //   location: location,
      //   programName: programName,
      //   programDescription: programDescription,
      //   feedbackFromRecipients: feedbackFromRecipients,
      //   typesOfGrants: typesOfGrants,
      //   impactOnEducation: impactOnEducation,
      //   challengesFaced: challengesFaced,
      //   recipientDemographics:recipientDemographics,
      //   averageGrantAmount: BigInt(averageGrantAmount),
      //   totalGrantsAwarded: BigInt(totalGrantsAwarded),
      //   totalAmountAwarded: BigInt(totalAmountAwarded),
      //   dataVerification: false,
      //   supportingFiles: urls ? urls : [],
      //   created: BigInt(Date.now()),
      // };
      // setManualData(EducationalGrantsData);
      // setUploadManually(false);
    } catch (error) {
        setSaving(false);
      console.log("Error saving Educational Grants Data", error);
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
          <h3 className={`${styles.formTitle}`}>Educational Grants</h3>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Program Name</label>
          <input
            className={`${styles.formInput}`}
            id="programName"
            type="text"
            placeholder="Name of the program"
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
            placeholder="Description of the Program"
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
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Recipients Feedback</label>
          <input
            className={`${styles.formInput}`}
            id="feedbackFromRecipients"
            type="text"
            placeholder="Feedback From the Recipients"
            value={feedbackFromRecipients}
            onChange={(e) => setFeedbackFromRecipients(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Grant Types</label>
          <input
            className={`${styles.formInput}`}
            id="typesOfGrants"
            type="text"
            placeholder="The Types of Grants"
            value={typesOfGrants}
            onChange={(e) => setTypesOfGrants(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Impact on Education</label>
          <input
            className={`${styles.formInput}`}
            id="impactOnEducation"
            type="text"
            placeholder="The Impact on the Education"
            value={impactOnEducation}
            onChange={(e) => setImpactOnEducation(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Challenges Faced</label>
          <input
            className={`${styles.formInput}`}
            id="challengesFaced"
            type="text"
            placeholder="The Challenges Faced"
            value={challengesFaced}
            onChange={(e) => setChallengesFaced(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Recipient Demographics</label>
          <input
            className={`${styles.formInput}`}
            id="recipientsDemographics"
            type="text"
            placeholder="Demographics of the Recipients"
            value={recipientDemographics}
            onChange={(e) => setRecipientDemographics(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Average Grant Amount</label>
          <input
            className={`${styles.formInput}`}
            id="averageGrantAmount"
            type="number"
            placeholder="What is the Average Grant Amount?"
            value={averageGrantAmount}
            onChange={(e) => setAverageGrantAmount(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Total Grants Awarded</label>
          <input
            className={`${styles.formInput}`}
            id="totalGrantsAwarded"
            type="number"
            placeholder="The Total Amount of Grants Awarded"
            value={totalGrantsAwarded}
            onChange={(e) => setTotalGrantsAwarded(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Total Amount Awarded</label>
          <input
            className={`${styles.formInput}`}
            id="totalAmountAwarded"
            type="number"
            placeholder="The Total Amount Awarded"
            value={totalAmountAwarded}
            onChange={(e) => setTotalAmountAwarded(e.target.value)}
            required
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

export default EducationalGrantsData;
