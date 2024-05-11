
import { useState } from "react";
import { toast } from "react-toastify";
import { uploadFile } from "../../../../../config/storage/functions";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import "react-datepicker/dist/react-datepicker.css";
import { styles } from "../../../../../styles/styles";
import FilesInput from "../support/FilesInput";
import { HealthcareFunding as HealthcareFundingType } from "../../../../../hooks/declarations/data/data.did";


const HealthcareFunding = ({ setManualData, setUploadManually }) => {
  const [saving, setSaving] = useState(false);
  const [supportFiles, setSupportFiles] = useState<File[] | null>(null);
  const { storageInitiated } = useSelector((state: RootState) => state.app);
  const [countDown, setCountDown] = useState<number>(0);

  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const [programName, setProgramName] = useState<string>("");
  const [programDescription, setProgramDescription] = useState<string>("");

  const [healthOutcomes, setHealthOutcomes] = useState<string>("");
  const [fundingSources, setFundingSources] = useState<string>("");
  const [feedbackFromBeneficiaries, setFeedbackFromBeneficiaries] = useState<string>("");
  const [typesOfServicesFunded, setTypesOfServicesFunded] = useState<string>("");
  const [challengesFaced, setChallengesFaced] = useState<string>("");
  const [impactOnHealthServices, setImpactOnHealthServices] = useState<string>("");
  const [numberOfHealthProjects, setNumberOfHealthProjects] = useState("");
  const [totalFundingAmount, setTotalFundingAmount] = useState("");
  

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

      // const healthcareFunding: HealthcareFundingType = {
      //   startDate: BigInt(startDateMilliseconds),
      //   endDate: BigInt(endDateMilliseconds),
      //   location: location,
      //   programName: programName,
      //   programDescription: programDescription,
      //   healthOutcomes: healthOutcomes,
      //   fundingSources: fundingSources,
      //   feedbackFromBeneficiaries: feedbackFromBeneficiaries,
      //   typesOfServicesFunded:typesOfServicesFunded,
      //   challengesFaced: challengesFaced,
      //   impactOnHealthServices: impactOnHealthServices,
      //   numberOfHealthProjects: BigInt(numberOfHealthProjects),
      //   totalFundingAmount: BigInt(totalFundingAmount),
      //   dataVerification: false,
      //   supportingFiles: urls ? urls : [],
      //   created: BigInt(Date.now()),
      // };
      // setManualData(healthcareFunding);
      setUploadManually(false);
    } catch (error) {
        setSaving(false);
      console.log("Error saving health care funding", error);
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
          <h3 className={`${styles.formTitle}`}>Health Care Funding</h3>
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
          <label htmlFor={`${styles.inputLabel}`}>Health Outcomes</label>
          <input
            className={`${styles.formInput}`}
            id="healthOutcomes"
            type="text"
            placeholder="Health Outcomes"
            value={healthOutcomes}
            onChange={(e) => setHealthOutcomes(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Funding Sources</label>
          <input
            className={`${styles.formInput}`}
            id="fundingSources"
            type="text"
            placeholder="Funding Sources"
            value={fundingSources}
            onChange={(e) => setFundingSources(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Feedback From Beneficiaries</label>
          <input
            className={`${styles.formInput}`}
            id="feedbackFromBeneficiaries"
            type="text"
            placeholder="Beneficiaries Feedback"
            value={feedbackFromBeneficiaries}
            onChange={(e) => setFeedbackFromBeneficiaries(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Types of Services Funded</label>
          <input
            className={`${styles.formInput}`}
            id="typesOfServicesFunded"
            type="text"
            placeholder="Types of Services Funded"
            value={typesOfServicesFunded}
            onChange={(e) => setTypesOfServicesFunded(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Challenges Faced</label>
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
          <label htmlFor={`${styles.inputLabel}`}>Impact on Health Services</label>
          <input
            className={`${styles.formInput}`}
            id="impactOnHealthServices"
            type="text"
            placeholder="Impact on Health Services"
            value={impactOnHealthServices}
            onChange={(e) => setImpactOnHealthServices(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>The Number of Health Projects</label>
          <input
            className={`${styles.formInput}`}
            id="numberOfHealthProjects"
            type="number"
            placeholder="The Number of Health Projects"
            value={numberOfHealthProjects}
            onChange={(e) => setNumberOfHealthProjects(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>The Total Funding Amount</label>
          <textarea
            className={`${styles.formInput}`}
            id="totalFundingAmount"
            placeholder="The Total Funding Amount"
            type="number"
            value={totalFundingAmount}
            onChange={(e) => setTotalFundingAmount(e.target.value)}
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

export default HealthcareFunding;
