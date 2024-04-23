
import { useState } from "react";
import { toast } from "react-toastify";
import { uploadFile } from "../../../../../config/storage/functions";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import "react-datepicker/dist/react-datepicker.css";
import { styles } from "../../../../../styles/styles";
import FilesInput from "../support/FilesInput";
import { HealthcareAccessData as HealthcareAccessDataType } from "../../../../../hooks/declarations/data/data.did";


const HealthcareAccessData = ({ setManualData, setUploadManually }) => {
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
  const [improvementsMade, setImprovementsMade] = useState<string>("");
  const [typesOfServicesProvided, setTypesOfServicesProvided] = useState<string>("");
  const [communityImpact, setCommunityImpact] = useState<string>("");
  const [feedbackFromPatients, setFeedbackFromPatients] = useState<string>("");
  const [barriersToAccess, setBarriersToAccess] = useState<string>("");
  const [patientDemographics, setPatientDemographics] = useState<string>("");
  const [totalPatientsServed, setTotalPatientsServed] = useState("");
  const [totalHealthFacilities, setTotalHealthFacilities] = useState("");
  

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

      const healthcareAccessData : HealthcareAccessDataType = {
        startDate: BigInt(startDateMilliseconds),
        endDate: BigInt(endDateMilliseconds),
        location: location,
        programName: programName,
        programDescription: programDescription,
        operationalChallenges: operationalChallenges,
        improvementsMade: improvementsMade,
        typesOfServicesProvided:typesOfServicesProvided,
        communityImpact: communityImpact,
        feedbackFromPatients: feedbackFromPatients,
        barriersToAccess: barriersToAccess,
        patientDemographics: patientDemographics,
        totalPatientsServed: BigInt(totalPatientsServed),
        totalHealthFacilities: BigInt(totalHealthFacilities),
        dataVerification: false,
        supportingFiles: urls ? urls : [],
        created: BigInt(Date.now()),
      };
      setManualData(healthcareAccessData);
      setUploadManually(false);
    } catch (error) {
        setSaving(false);
      console.log("Error saving Healthcare Access Data", error);
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
          <h3 className={`${styles.formTitle}`}>Health Care Access Data</h3>
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
            placeholder="What're the Operational Challenges"
            value={operationalChallenges}
            onChange={(e) => setOperationalChallenges(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Improvements Made</label>
          <input
            className={`${styles.formInput}`}
            id="improvementsMade"
            type="text"
            placeholder="The Improvements Made"
            value={improvementsMade}
            onChange={(e) => setImprovementsMade(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Types of Services Provided</label>
          <input
            className={`${styles.formInput}`}
            id="typesOfServicesProvided"
            type="text"
            placeholder="The Types of Services Provided"
            value={typesOfServicesProvided}
            onChange={(e) => setTypesOfServicesProvided(e.target.value)}
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
          <label htmlFor={`${styles.inputLabel}`}>Feedback From Patients</label>
          <input
            className={`${styles.formInput}`}
            id="feedbackFromPatients"
            type="text"
            placeholder="Patients Feedback"
            value={feedbackFromPatients}
            onChange={(e) => setFeedbackFromPatients(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Barriers to Access</label>
          <input
            className={`${styles.formInput}`}
            id="barriersToAccess"
            type="text"
            placeholder="The Barriers to Access"
            value={barriersToAccess}
            onChange={(e) => setBarriersToAccess(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Patient Demographics</label>
          <input
            className={`${styles.formInput}`}
            id="patientDemographics"
            type="text"
            placeholder="The Patient Demographics"
            value={patientDemographics}
            onChange={(e) => setPatientDemographics(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Total Patients Served</label>
          <input
            className={`${styles.formInput}`}
            id="totalPatientsServed"
            type="number"
            placeholder="The Total Number of Patients Served"
            value={totalPatientsServed}
            onChange={(e) => setTotalPatientsServed(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Total Health Facilities</label>
          <textarea
            className={`${styles.formInput}`}
            id="totalHealthFacilities"
            placeholder="The Total Number of Health Facilities"
            type="number"
            value={totalHealthFacilities}
            onChange={(e) => setTotalHealthFacilities(e.target.value)}
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

export default HealthcareAccessData;
