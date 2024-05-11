
import { useState } from "react";
import { toast } from "react-toastify";
import { uploadFile } from "../../../../../config/storage/functions";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import "react-datepicker/dist/react-datepicker.css";
import { styles } from "../../../../../styles/styles";
import FilesInput from "../support/FilesInput";
import {WorkplaceGenderEqualityPoliciesData as WorkplaceGenderEqualityPoliciesDataType } from "../../../../../hooks/declarations/data/data.did";


const WorkplaceGenderEqualityPoliciesData = ({ setManualData, setUploadManually }) => {
  const [saving, setSaving] = useState(false);
  const [supportFiles, setSupportFiles] = useState<File[] | null>(null);
  const { storageInitiated } = useSelector((state: RootState) => state.app);
  const [countDown, setCountDown] = useState<number>(0);

  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const [policyName, setPolicyName] = useState<string>("");
  const [policyDescription, setPolicyDescription] = useState<string>("");
  const [challengesFaced, setChallengesFaced] = useState<string>("");
  const [reviewDate, setReviewDate] = useState<string>("");
  const [implementationDate, setImplementationDate] = useState<string>("");
  const [feedbackFromEmployees, setFeedbackFromEmployees] = useState<string>("");
  const [measuresTaken, setMeasuresTaken] = useState<string>("");
  const [outcomesAchieved, setOutcomesAchieved] = useState<string>("");
  const [numberOfEmployeesAffected, setNumberOfEmployeesAffected] = useState("");
  const [complianceRate, setComplianceRate] = useState("");
  

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

      // const WorkplaceGenderEqualityPoliciesData : WorkplaceGenderEqualityPoliciesDataType = {
      //   startDate: BigInt(startDateMilliseconds),
      //   endDate: BigInt(endDateMilliseconds),
      //   location: location,
      //   policyName: policyName,
      //   policyDescription: policyDescription,
      //   challengesFaced: challengesFaced,
      //   reviewDate:reviewDate,
      //   implementationDate: implementationDate,
      //   feedbackFromEmployees: feedbackFromEmployees,
      //   measuresTaken: measuresTaken,
      //   outcomesAchieved:outcomesAchieved,
      //   numberOfEmployeesAffected: BigInt(numberOfEmployeesAffected),
      //   complianceRate:BigInt(complianceRate),
      //   dataVerification: false,
      //   supportingFiles: urls ? urls : [],
      //   created: BigInt(Date.now()),
      // };
      // setManualData(WorkplaceGenderEqualityPoliciesData);
      setUploadManually(false);
    } catch (error) {
        setSaving(false);
      console.log("Error saving Work Place Gender Equality Policies Data", error);
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
          <h3 className={`${styles.formTitle}`}>Workplace Gender Equality Policies Data</h3>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Policy Name</label>
          <input
            className={`${styles.formInput}`}
            id="policyName"
            type="text"
            placeholder="Name of the Policy"
            value={policyName}
            onChange={(e) => setPolicyName(e.target.value)}
            required
          />

        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Policy Description</label>
          <textarea
            className={`${styles.formInput}`}
            id="policyDescription"
            placeholder="Description of the Policy"
            value={policyDescription}
            onChange={(e) => setPolicyDescription(e.target.value)}
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
          <label htmlFor={`${styles.inputLabel}`}>Review Date</label>
          <input
            className={`${styles.formInput}`}
            id="reviewDate"
            type="text"
            placeholder="Date of Review"
            value={reviewDate}
            onChange={(e) => setReviewDate(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Implementation Date</label>
          <input
            className={`${styles.formInput}`}
            id="implementation Date"
            type="text"
            placeholder="Date of Implementation"
            value={implementationDate}
            onChange={(e) => setImplementationDate(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Feedback From Employees</label>
          <input
            className={`${styles.formInput}`}
            id="feedbackFromEmployees"
            type="text"
            placeholder="Employees Feedback"
            value={feedbackFromEmployees}
            onChange={(e) => setFeedbackFromEmployees(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Measures Taken</label>
          <input
            className={`${styles.formInput}`}
            id="measuresTaken"
            type="text"
            placeholder="What're the measures taken?"
            value={measuresTaken}
            onChange={(e) => setMeasuresTaken(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Outcomes Achieved</label>
          <input
            className={`${styles.formInput}`}
            id="outcomesAchieved"
            type="text"
            placeholder="What're the Outcomes Achieved"
            value={outcomesAchieved}
            onChange={(e) => setOutcomesAchieved(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Number of Employees Affected</label>
          <input
            className={`${styles.formInput}`}
            id="numberOfEmployeesAffected"
            type="number"
            placeholder="The Number of Employees Affected"
            value={numberOfEmployeesAffected}
            onChange={(e) => setNumberOfEmployeesAffected(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Compliance Rate</label>
          <input
            className={`${styles.formInput}`}
            id="complianceRate"
            type="number"
            placeholder="Rate of Compliance"
            value={complianceRate}
            onChange={(e) => setComplianceRate(e.target.value)}
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

export default WorkplaceGenderEqualityPoliciesData;
