
import { useState } from "react";
import { toast } from "react-toastify";
import { uploadFile } from "../../../../../config/storage/functions";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import "react-datepicker/dist/react-datepicker.css";
import { styles } from "../../../../../styles/styles";
import FilesInput from "../support/FilesInput";
import {WomensEmpowermentProgramData as WomensEmpowermentProgramDataType } from "../../../../../hooks/declarations/data/data.did";


const WomensEmpowermentProgramData = ({ setManualData, setUploadManually }) => {
  const [saving, setSaving] = useState(false);
  const [supportFiles, setSupportFiles] = useState<File[] | null>(null);
  const { storageInitiated } = useSelector((state: RootState) => state.app);
  const [countDown, setCountDown] = useState<number>(0);

  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const [programName, setProgramName] = useState<string>("");
  const [programDescription, setProgramDescription] = useState<string>("");

  const [challengesFaced, setChallengesFaced] = useState<string>("");
  const [typeOfActivities, setTypeOfActivities] = useState<string>("");
  const [feedbackFromParticipants, setFeedbackFromParticipants] = useState<string>("");
  const [impactOnParticipants, setImpactOnParticipants] = useState<string>("");
  const [followUpSupport, setFollowUpSupport] = useState<string>("");
  const [outcomesAchieved, setOutcomesAchieved] = useState<string>("");
  const [partnershipsFormed, setPartnershipsFormed] = useState<string>("");
  const [numberOfParticipants, setNumberOfParticipants] = useState("");
  

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

      // const WomensEmpowermentProgramData : WomensEmpowermentProgramDataType = {
      //   startDate: BigInt(startDateMilliseconds),
      //   endDate: BigInt(endDateMilliseconds),
      //   location: location,
      //   programName: programName,
      //   programDescription: programDescription,
      //   challengesFaced: challengesFaced,
      //   typeOfActivities: typeOfActivities,
      //   feedbackFromParticipants: feedbackFromParticipants,
      //   impactOnParticipants: impactOnParticipants,
      //   followUpSupport:followUpSupport,
      //   outcomesAchieved:outcomesAchieved,
      //   partnershipsFormed:partnershipsFormed,
      //   numberOfParticipants: BigInt(numberOfParticipants),
      //   dataVerification: false,
      //   supportingFiles: urls ? urls : [],
      //   created: BigInt(Date.now()),
      // };
      // setManualData(WomensEmpowermentProgramData);
      // setUploadManually(false);
    } catch (error) {
        setSaving(false);
      console.log("Error saving Womens Empowerment Program Data", error);
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
          <h3 className={`${styles.formTitle}`}>Women Empowerment Program Data</h3>
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
          <label htmlFor={`${styles.inputLabel}`}>Type Of Activities</label>
          <input
            className={`${styles.formInput}`}
            id="typeOfActivities"
            type="text"
            placeholder="What're the Type Of Activities?"
            value={typeOfActivities}
            onChange={(e) => setTypeOfActivities(e.target.value)}
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
          <label htmlFor={`${styles.inputLabel}`}>Impact On Participants</label>
          <input
            className={`${styles.formInput}`}
            id="impactOnParticipants"
            type="text"
            placeholder="The Impact on Participants"
            value={impactOnParticipants}
            onChange={(e) => setImpactOnParticipants(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Follow-up Support</label>
          <input
            className={`${styles.formInput}`}
            id="followUpSupport"
            type="text"
            placeholder="Support Follow-up in place?"
            value={followUpSupport}
            onChange={(e) => setFollowUpSupport(e.target.value)}
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
          <label htmlFor={`${styles.inputLabel}`}>Partnerships Formed</label>
          <input
            className={`${styles.formInput}`}
            id="partnershipsFormed"
            type="text"
            placeholder="Partnerships that have Formed"
            value={partnershipsFormed}
            onChange={(e) => setPartnershipsFormed(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Number of Participants</label>
          <input
            className={`${styles.formInput}`}
            id="numberOfParticipants"
            type="number"
            placeholder="The Number of Participants"
            value={numberOfParticipants}
            onChange={(e) => setNumberOfParticipants(e.target.value)}
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

export default WomensEmpowermentProgramData;
