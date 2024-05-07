
import { useState } from "react";
import { toast } from "react-toastify";
import { uploadFile } from "../../../../../config/storage/functions";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import "react-datepicker/dist/react-datepicker.css";
import { styles } from "../../../../../styles/styles";
import FilesInput from "../support/FilesInput";
import {HealthServicesData} from "../../../../../hooks/declarations/data/data.did";


const HealthCheckups = ({ setManualData, setUploadManually }) => {
  const [saving, setSaving] = useState(false);
  const [supportFiles, setSupportFiles] = useState<File[] | null>(null);
  const { storageInitiated } = useSelector((state: RootState) => state.app);
  const [countDown, setCountDown] = useState<number>(0);

  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const [programName, setProgramName] = useState<string>("");
  const [programDescription, setProgramDescription] = useState<string>("");

  const [operationalChallenges, setOperationalChallenges] = useState<string>("");
  const [feedbackFromParticipants, setFeedbackFromParticipants] = useState<string>("");
  const [followUpActions, setFollowUpActions] = useState<string>("");
  const [healthOutcomesMeasured, setHealthOutcomesMeasured] = useState<string>("");
  const [communityImpact, setCommunityImpact] = useState<string>("");
  const [typeOfService, setTypeOfService] = useState<string>("");
  const [totalServicesProvided, setTotalServicesProvided] = useState("");
  const [totalParticipants, setTotalParticipants] = useState("");
  const [vaccinationCoverage, setVaccinationCoverage] = useState("");
  

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

      // const healthCheckupVaccinationData: HealthCheckupVaccinationDataType = {
      //   startDate: BigInt(startDateMilliseconds),
      //   endDate: BigInt(endDateMilliseconds),
      //   location: location,
      //   programName: programName,
      //   programDescription: programDescription,
      //   operationalChallenges: operationalChallenges,
      //   feedbackFromParticipants: feedbackFromParticipants,
      //   followUpActions: followUpActions,
      //   healthOutcomesMeasured:healthOutcomesMeasured,
      //   communityImpact: communityImpact,
      //   typeOfService: typeOfService,
      //   totalServicesProvided: BigInt(totalServicesProvided),
      //   totalParticipants: BigInt(totalParticipants),
      //   vaccinationCoverage: BigInt(vaccinationCoverage),
      //   dataVerification: false,
      //   supportingFiles: urls ? urls : [],
      //   created: BigInt(Date.now()),
      // };
      // setManualData(healthCheckupVaccinationData);
      // setUploadManually(false);
    } catch (error) {
        setSaving(false);
      console.log("Error saving health checkup vaccination data", error);
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
          <h3 className={`${styles.formTitle}`}>Health Checkup Vaccination Data</h3>
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
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Operational Challenges</label>
          <input
            className={`${styles.formInput}`}
            id="operationalChallenges"
            type="text"
            placeholder="What're the operational challenges"
            value={operationalChallenges}
            onChange={(e) => setOperationalChallenges(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Feedback From Participants</label>
          <input
            className={`${styles.formInput}`}
            id="feedbackFromParticipants"
            type="text"
            placeholder="Participants Feedback"
            value={feedbackFromParticipants}
            onChange={(e) => setFeedbackFromParticipants(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Follow-up Actions</label>
          <input
            className={`${styles.formInput}`}
            id="followUpActions"
            type="text"
            placeholder="Follow-up Actions"
            value={followUpActions}
            onChange={(e) => setFollowUpActions(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Health Outcomes Measured</label>
          <input
            className={`${styles.formInput}`}
            id="healthOutcomesMeasured"
            type="text"
            placeholder="Health Outcomes Measured"
            value={healthOutcomesMeasured}
            onChange={(e) => setHealthOutcomesMeasured(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Community Impact</label>
          <input
            className={`${styles.formInput}`}
            id="communityImpact"
            type="text"
            placeholder="The Impact on the Community"
            value={communityImpact}
            onChange={(e) => setCommunityImpact(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Type of Service</label>
          <input
            className={`${styles.formInput}`}
            id="typeOfService"
            type="text"
            placeholder="What's the Type of Service"
            value={typeOfService}
            onChange={(e) => setTypeOfService(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Total Services Provided</label>
          <input
            className={`${styles.formInput}`}
            id="totalServicesProvided"
            type="number"
            placeholder="The Total Services Provided"
            value={totalServicesProvided}
            onChange={(e) => setTotalServicesProvided(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Total Participants</label>
          <input
            className={`${styles.formInput}`}
            id="totalParticipants"
            placeholder="The Total number of Participants"
            type="number"
            value={totalParticipants}
            onChange={(e) => setTotalParticipants(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Vaccination Coverage</label>
          <input
            className={`${styles.formInput}`}
            id="vaccinationCoverage"
            placeholder="The Vaccination Coverage"
            type="number"
            value={vaccinationCoverage}
            onChange={(e) => setVaccinationCoverage(e.target.value)}
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

export default HealthCheckups;