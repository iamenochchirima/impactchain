
import { useState } from "react";
import { toast } from "react-toastify";
import { uploadFile } from "../../../../../config/storage/functions";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import "react-datepicker/dist/react-datepicker.css";
import { styles } from "../../../../../styles/styles";
import FilesInput from "../support/FilesInput";
import { JobTrainingProgram as JobTrainingProgramType } from "../../../../../hooks/declarations/impact_chain_data/impact_chain_data.did";

const JobTrainingProgram = ({ setManualData, setUploadManually }) => {
  const [saving, setSaving] = useState(false);
  const [supportFiles, setSupportFiles] = useState<File[] | null>(null);
  const { storageInitiated } = useSelector((state: RootState) => state.app);
  const [countDown, setCountDown] = useState<number>(0);

  const [programName, setProgramName] = useState<string>("");
  const [programDescription, setProgramDescription] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [programLocation, setProgramLocation] = useState<string>("");
  const [targetDemographic, setTargetDemographic] = useState<string>("");
  const [numberOfParticipants, setNumberOfParticipants] = useState("");
  const [completionRate, setCompletionRate] = useState("");
  const [programBudget, setProgramBudget] = useState("");
  const [fundingSources, setFundingSources] = useState<string>("");
  const [resourcesProvided, setResourcesProvided] = useState<string>("");
  const [skillsDeveloped, setSkillsDeveloped] = useState<string>("");
  const [employmentRatePostProgram, setEmploymentRatePostProgram] = useState("");
  const [averageIncomeBeforeProgram, setAverageIncomeBeforeProgram] = useState("");
  const [averageIncomeAfterProgram, setAverageIncomeAfterProgram] = useState("");
  const [participantFeedback, setParticipantFeedback] = useState<string>("");
  const [successStories, setSuccessStories] = useState<string>("");

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

      const jobTrainingProgram: JobTrainingProgramType = {
        programName: programName,
        programDescription: programDescription,
        startDate: BigInt(startDateMilliseconds),
        endDate: endDate ? [BigInt(endDateMilliseconds)] : [],
        programLocation: programLocation,
        targetDemographic: targetDemographic,
        numberOfParticipants: BigInt(numberOfParticipants),
        completionRate: completionRate.toString(),
        programBudget: BigInt(programBudget),
        fundingSources: fundingSources,
        resourcesProvided: resourcesProvided,
        skillsDeveloped: skillsDeveloped,
        employmentRatePostProgram: employmentRatePostProgram.toString(),
        averageIncomeBeforeProgram: BigInt(averageIncomeBeforeProgram),
        averageIncomeAfterProgram: BigInt(averageIncomeAfterProgram),
        participantFeedback: participantFeedback,
        successStories: successStories,
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
          <h3 className={`${styles.formTitle}`}>Job Training Program</h3>
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
          <label htmlFor={`${styles.inputLabel}`}>Program Location</label>
          <input
            className={`${styles.formInput}`}
            id="programLocation"
            type="text"
            placeholder="Program Location"
            value={programLocation}
            onChange={(e) => setProgramLocation(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Target Demographic</label>
          <input
            className={`${styles.formInput}`}
            id="targetDemographic"
            type="text"
            placeholder="Target Demographic"
            value={targetDemographic}
            onChange={(e) => setTargetDemographic(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Number of Participants</label>
          <input
            className={`${styles.formInput}`}
            id="numberOfParticipants"
            type="number"
            placeholder="Number of Participants"
            value={numberOfParticipants}
            onChange={(e) => setNumberOfParticipants(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Completion Rate</label>
          <input
            className={`${styles.formInput}`}
            id="completionRate"
            type="number"
            placeholder="Completion Rate"
            value={completionRate}
            onChange={(e) => setCompletionRate(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Program Budget</label>
          <input
            className={`${styles.formInput}`}
            id="programBudget"
            type="number"
            placeholder="Program Budget"
            value={programBudget}
            onChange={(e) => setProgramBudget(e.target.value)}
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
          <label htmlFor={`${styles.inputLabel}`}>Resources Provided</label>
          <input
            className={`${styles.formInput}`}
            id="resourcesProvided"
            type="text"
            placeholder="Resources Provided"
            value={resourcesProvided}
            onChange={(e) => setResourcesProvided(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Skills Developed</label>
          <input
            className={`${styles.formInput}`}
            id="skillsDeveloped"
            type="text"
            placeholder="Skills Developed"
            value={skillsDeveloped}
            onChange={(e) => setSkillsDeveloped(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Employment Rate Post Program</label>
          <input
            className={`${styles.formInput}`}
            id="employmentRatePostProgram"
            type="number"
            placeholder="Employment Rate Post Program"
            value={employmentRatePostProgram}
            onChange={(e) => setEmploymentRatePostProgram(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Average Income Before Program</label>
          <input
            className={`${styles.formInput}`}
            id="averageIncomeBeforeProgram"
            type="number"
            placeholder="Average Income Before Program"
            value={averageIncomeBeforeProgram}
            onChange={(e) => setAverageIncomeBeforeProgram(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Average Income After Program</label>
          <input
            className={`${styles.formInput}`}
            id="averageIncomeAfterProgram"
            type="number"
            placeholder="Average Income After Program"
            value={averageIncomeAfterProgram}
            onChange={(e) => setAverageIncomeAfterProgram(e.target.value)}
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
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Success Stories</label>
          <textarea
            className={`${styles.formInput}`}
            id="successStories"
            placeholder="Success Stories"
            value={successStories}
            onChange={(e) => setSuccessStories(e.target.value)}
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

export default JobTrainingProgram;