
import { useState } from "react";
import { toast } from "react-toastify";
import { uploadFile } from "../../../../../config/storage/functions";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import "react-datepicker/dist/react-datepicker.css";
import { styles } from "../../../../../styles/styles";
import FilesInput from "../support/FilesInput";
import { SchoolsBuiltSupportedData as SchoolsBuiltSupportedDataType } from "../../../../../hooks/declarations/data/data.did";


const SchoolsBuiltSupportedData = ({ setManualData, setUploadManually }) => {
  const [saving, setSaving] = useState(false);
  const [supportFiles, setSupportFiles] = useState<File[] | null>(null);
  const { storageInitiated } = useSelector((state: RootState) => state.app);
  const [countDown, setCountDown] = useState<number>(0);

  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const [projectName, setProjectName] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<string>("");

  const [feedbackFromCommunity, setFeedbackFromCommunity] = useState<string>("");
  const [sourcesOfFunding, setSourcesOfFunding] = useState<string>("");
  const [communityImpact, setCommunityImpact] = useState<string>("");
  const [challengesFaced, setChallengesFaced] = useState<string>("");
  const [numberOfSchoolsBuilt, setNumberOfSchoolsBuilt] = useState("");
  const [studentCapacityIncrease, setStudentCapacityIncrease] = useState("");
  const [numberOfSchoolsSupported, setNumberOfSchoolsSupported] = useState("");
  const [totalInvestment, setTotalInvestment] = useState("");
  

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

      // const schoolsBuiltSupportedData : SchoolsBuiltSupportedDataType = {
      //   startDate: BigInt(startDateMilliseconds),
      //   endDate: BigInt(endDateMilliseconds),
      //   location: location,
      //   projectName: projectName,
      //   projectDescription: projectDescription,
      //   feedbackFromCommunity: feedbackFromCommunity,
      //   sourcesOfFunding: sourcesOfFunding,
      //   communityImpact: communityImpact,
      //   challengesFaced: challengesFaced,
      //   numberOfSchoolsBuilt:BigInt(numberOfSchoolsBuilt),
      //   studentCapacityIncrease: BigInt(studentCapacityIncrease),
      //   numberOfSchoolsSupported: BigInt(numberOfSchoolsSupported),
      //   totalInvestment: BigInt(totalInvestment),
      //   dataVerification: false,
      //   supportingFiles: urls ? urls : [],
      //   created: BigInt(Date.now()),
      // };
      // setManualData(schoolsBuiltSupportedData);
      setUploadManually(false);
    } catch (error) {
        setSaving(false);
      console.log("Error saving Schools Built Supported Data", error);
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
          <h3 className={`${styles.formTitle}`}>Schools Built</h3>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Project Name</label>
          <input
            className={`${styles.formInput}`}
            id="projectName"
            type="text"
            placeholder="Project Name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />

        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Project Description</label>
          <textarea
            className={`${styles.formInput}`}
            id="projectDescription"
            placeholder="Project Description"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
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
          <label htmlFor={`${styles.inputLabel}`}>Community Feedback</label>
          <input
            className={`${styles.formInput}`}
            id="feedbackFromCommunity"
            type="text"
            placeholder="Feedback From the Community"
            value={feedbackFromCommunity}
            onChange={(e) => setFeedbackFromCommunity(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Sources of Funding</label>
          <input
            className={`${styles.formInput}`}
            id="sourcesOfFunding"
            type="text"
            placeholder="The Sources of Funding"
            value={sourcesOfFunding}
            onChange={(e) => setSourcesOfFunding(e.target.value)}
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
          <label htmlFor={`${styles.inputLabel}`}>Number of Schools Built</label>
          <input
            className={`${styles.formInput}`}
            id="numberOfSchoolsBuilt"
            type="number"
            placeholder="The Number of Schools Built"
            value={numberOfSchoolsBuilt}
            onChange={(e) => setNumberOfSchoolsBuilt(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Student Capacity Increase</label>
          <input
            className={`${styles.formInput}`}
            id="studentCapacityIncrease"
            type="number"
            placeholder="The Student Capacity Increase"
            value={studentCapacityIncrease}
            onChange={(e) => setStudentCapacityIncrease(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Number Of Schools Supported</label>
          <input
            className={`${styles.formInput}`}
            id="numberOfSchoolsSupported"
            type="number"
            placeholder="The Number of Schools Supported"
            value={numberOfSchoolsBuilt}
            onChange={(e) => setNumberOfSchoolsBuilt(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Total Investment</label>
          <input
            className={`${styles.formInput}`}
            id="totalInvestment"
            type="number"
            placeholder="The Total Investment"
            value={totalInvestment}
            onChange={(e) => setTotalInvestment(e.target.value)}
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

export default SchoolsBuiltSupportedData;
