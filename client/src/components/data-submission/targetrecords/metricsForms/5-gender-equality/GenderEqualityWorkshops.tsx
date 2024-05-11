
import { useState } from "react";
import { toast } from "react-toastify";
import { uploadFile } from "../../../../../config/storage/functions";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import "react-datepicker/dist/react-datepicker.css";
import { styles } from "../../../../../styles/styles";
import FilesInput from "../support/FilesInput";
import {GenderEqualityWorkshopsData as GenderEqualityWorkshopsDataType } from "../../../../../hooks/declarations/data/data.did";


const GenderEqualityWorkshopsData = ({ setManualData, setUploadManually }) => {
  const [saving, setSaving] = useState(false);
  const [supportFiles, setSupportFiles] = useState<File[] | null>(null);
  const {storageInitiated } = useSelector((state: RootState) => state.app);
  const [countDown, setCountDown] = useState<number>(0);

  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const [workshopName, setWorkshopName] = useState<string>("");
  const [workshopDescription, setWorkshopDescription] = useState<string>("");

  const [challengesFaced, setChallengesFaced] = useState<string>("");
  const [themesCovered, setThemesCovered] = useState<string>("");
  const [feedbackFromParticipants, setFeedbackFromParticipants] = useState<string>("");
  const [participantDemographics, setParticipantDemographics] = useState<string>("");
  const [outcomesMeasured, setOutcomesMeasured] = useState<string>("");
  const [organizationalPartners, setOrganizationalPartners] = useState<string>("");
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

      // const GenderEqualityWorkshopsData : GenderEqualityWorkshopsDataType = {
      //   startDate: BigInt(startDateMilliseconds),
      //   endDate: BigInt(endDateMilliseconds),
      //   location: location,
      //   workshopName: workshopName,
      //   workshopDescription: workshopDescription,
      //   challengesFaced: challengesFaced,
      //   themesCovered: themesCovered,
      //   feedbackFromParticipants: feedbackFromParticipants,
      //   participantDemographics: participantDemographics,
      //   outcomesMeasured:outcomesMeasured,
      //   organizationalPartners:organizationalPartners,
      //   numberOfParticipants: BigInt(numberOfParticipants),
      //   dataVerification: false,
      //   supportingFiles: urls ? urls : [],
      //   created: BigInt(Date.now()),
      // };
      // setManualData(GenderEqualityWorkshopsData);
      setUploadManually(false);
    } catch (error) {
        setSaving(false);
      console.log("Error saving Gender Equality Workshop Data", error);
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
          <h3 className={`${styles.formTitle}`}>Gender Equality Workshop Data</h3>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Workshop Name</label>
          <input
            className={`${styles.formInput}`}
            id="workshopName"
            type="text"
            placeholder="Name of the Workshop"
            value={workshopName}
            onChange={(e) => setWorkshopName(e.target.value)}
            required
          />

        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Workshop Description</label>
          <textarea
            className={`${styles.formInput}`}
            id="workshopDescription"
            placeholder="Description of the Workshop"
            value={workshopDescription}
            onChange={(e) => setWorkshopDescription(e.target.value)}
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
          <label htmlFor={`${styles.inputLabel}`}>Themes Covered</label>
          <input
            className={`${styles.formInput}`}
            id="themesCovered"
            type="text"
            placeholder="What're the Themes Covered?"
            value={themesCovered}
            onChange={(e) => setThemesCovered(e.target.value)}
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
          <label htmlFor={`${styles.inputLabel}`}>Participant Demographics</label>
          <input
            className={`${styles.formInput}`}
            id="particpantDemographics"
            type="text"
            placeholder="Demographics of the Participants"
            value={participantDemographics}
            onChange={(e) => setParticipantDemographics(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Outcomes Measured</label>
          <input
            className={`${styles.formInput}`}
            id="outcomesMeasured"
            type="text"
            placeholder="The Outcomes Measured"
            value={outcomesMeasured}
            onChange={(e) => setOutcomesMeasured(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Organizational Partners</label>
          <input
            className={`${styles.formInput}`}
            id="organizationalPartners"
            type="text"
            placeholder="Organizational Partners"
            value={organizationalPartners}
            onChange={(e) => setOrganizationalPartners(e.target.value)}
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

export default GenderEqualityWorkshopsData;
