import React, { useState } from "react";
import { toast } from "react-toastify";
import { uploadFile } from "../../../../../config/storage/functions";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import "react-datepicker/dist/react-datepicker.css";
import { styles } from "../../../../../styles/styles";
import FilesInput from "../support/FilesInput";
import { PeopleAssistedOutOfPoverty as PeopleAssistedOutOfPovertyType } from "../../../../../hooks/declarations/impact_chain_data/impact_chain_data.did";

const PeopleAssistedOutOfPoverty = ({ setManualData, setUploadManually }) => {
  const [saving, setSaving] = useState(false);
  const [supportFiles, setSupportFiles] = useState<File[] | null>(null);
  const { storageInitiated } = useSelector((state: RootState) => state.app);
  const [countDown, setCountDown] = useState<number>(0);

  const [programName, setProgramName] = useState<string>("");
  const [programDescription, setProgramDescription] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [totalParticipants, setTotalParticipants] = useState("");
  const [successfullyAssisted, setSuccessfullyAssisted] = useState("");
  const [averageIncomeBeforeProgram, setAverageIncomeBeforeProgram] =
    useState("");
  const [averageIncomeAfterProgram, setAverageIncomeAfterProgram] =
    useState("");
  const [followUpDuration, setFollowUpDuration] = useState("");
  const [longTermImpact, setLongTermImpact] = useState<string>("");
  const [participantFeedback, setParticipantFeedback] = useState<string>("");
  const [challengesFaced, setChallengesFaced] = useState<string>("");

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

      const request: PeopleAssistedOutOfPovertyType = {
        programName: programName,
        programDescription: programDescription,
        startDate: BigInt(startDateMilliseconds),
        endDate: BigInt(endDateMilliseconds),
        location: location,
        totalParticipants: BigInt(totalParticipants),
        successfullyAssisted: BigInt(successfullyAssisted),
        averageIncomeBeforeProgram: BigInt(averageIncomeBeforeProgram),
        averageIncomeAfterProgram: BigInt(averageIncomeAfterProgram),
        followUpDuration: BigInt(followUpDuration),
        longTermImpact: longTermImpact,
        participantFeedback: participantFeedback,
        challengesFaced: challengesFaced,
        supportingFiles: urls ? urls : [],
        dataVerification: false,
        created: BigInt(Date.now()),
      };
      setManualData(request);
      setUploadManually(false);
      setSaving(false);
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
            People Assisted Out of Poverty
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
            value = {startDate}
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
            value = {endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Program Location</label>
          <input
            className={`${styles.formInput}`}
            id="location"
            type="string"
            placeholder="Program Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Total Participants</label>
          <input
            className={`${styles.formInput}`}
            id="totalParticipants"
            type="number"
            placeholder="Total Participants"
            value={totalParticipants}
            onChange={(e) => setTotalParticipants(parseInt(e.target.value))}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Successfully Assisted</label>
          <input
            className={`${styles.formInput}`}
            id="successfullyAssisted"
            type="number"
            placeholder="Successfully Assisted"
            value={successfullyAssisted}
            onChange={(e) => setSuccessfullyAssisted(parseInt(e.target.value))}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>
            Average Income Before Program
          </label>
          <input
            className={`${styles.formInput}`}
            id="averageIncomeBeforeProgram"
            type="number"
            placeholder="Average Income Before Program"
            value={averageIncomeBeforeProgram}
            onChange={(e) =>
              setAverageIncomeBeforeProgram(parseInt(e.target.value))
            }
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>
            Average Income After Program
          </label>
          <input
            className={`${styles.formInput}`}
            id="averageIncomeAfterProgram"
            type="number"
            placeholder="Average Income After Program"
            value={averageIncomeAfterProgram}
            onChange={(e) =>
              setAverageIncomeAfterProgram(parseInt(e.target.value))
            }
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Follow Up Duration</label>
          <input
            className={`${styles.formInput}`}
            id="followUpDuration"
            type="number"
            placeholder="Follow Up Duration"
            value={followUpDuration}
            onChange={(e) => setFollowUpDuration(parseInt(e.target.value))}
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Long Term Impact</label>
          <textarea
            className={`${styles.formInput}`}
            id="longTermImpact"
            placeholder="Long Term Impact"
            value={longTermImpact}
            onChange={(e) => setLongTermImpact(e.target.value)}
            required
            style={{ overflow: "hidden" }}
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
          <label htmlFor={`${styles.inputLabel}`}>Challenges Faced</label>
          <textarea
            className={`${styles.formInput}`}
            id="challengesFaced"
            placeholder="Challenges Faced"
            value={challengesFaced}
            onChange={(e) => setChallengesFaced(e.target.value)}
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

export default PeopleAssistedOutOfPoverty;
