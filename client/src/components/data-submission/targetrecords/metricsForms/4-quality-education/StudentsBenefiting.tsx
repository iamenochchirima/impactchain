
import { useState } from "react";
import { toast } from "react-toastify";
import { uploadFile } from "../../../../../config/storage/functions";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import "react-datepicker/dist/react-datepicker.css";
import { styles } from "../../../../../styles/styles";
import FilesInput from "../support/FilesInput";
import { StudentsBenefitingData as StudentsBenefitingDataType } from "../../../../../hooks/declarations/data/data.did";


const StudentsBenefitingData = ({ setManualData, setUploadManually }) => {
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
  const [typeOfBenefits, setTypeOfBenefits] = useState<string>("");
  const [feedbackFromStudents, setFeedbackFromStudents] = useState<string>("");
  const [educationalLevel, setEducationalLevel] = useState<string>("");
  const [improvementsInPerformance, setImprovementsInPerformance] = useState<string>("");
  const [feedbackFromEducators, setFeedbackFromEducators] = useState<string>("");
  const [graduationRates, setGraduationRates] = useState("");
  const [totalStudentsBenefited, setTotalStudentsBenefited] = useState("");
  const [followUpSuccessRate, setFollowUpSuccessRate] = useState("");
  

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

      // const StudentsBenefitingData : StudentsBenefitingDataType = {
      //   startDate: BigInt(startDateMilliseconds),
      //   endDate: BigInt(endDateMilliseconds),
      //   location: location,
      //   programName: programName,
      //   programDescription: programDescription,
      //   challengesFaced: challengesFaced,
      //   typeOfBenefits: typeOfBenefits,
      //   feedbackFromStudents: feedbackFromStudents,
      //   educationalLevel: educationalLevel,
      //   improvementsInPerformance:improvementsInPerformance,
      //   feedbackFromEducators:feedbackFromEducators,
      //   graduationRates: BigInt(graduationRates),
      //   totalStudentsBenefited: BigInt(totalStudentsBenefited),
      //   followUpSuccessRate: BigInt(followUpSuccessRate),
      //   dataVerification: false,
      //   supportingFiles: urls ? urls : [],
      //   created: BigInt(Date.now()),
      // };
      // setManualData(StudentsBenefitingData);
      // setUploadManually(false);
    } catch (error) {
        setSaving(false);
      console.log("Error saving Students Benefiting Data", error);
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
          <h3 className={`${styles.formTitle}`}>Students Benefiting Data</h3>
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
          <label htmlFor={`${styles.inputLabel}`}>Type Of Benefits</label>
          <input
            className={`${styles.formInput}`}
            id="typeOfBenefits"
            type="text"
            placeholder="What're the Type Of Benefits?"
            value={typeOfBenefits}
            onChange={(e) => setTypeOfBenefits(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Feedback From Students</label>
          <input
            className={`${styles.formInput}`}
            id="feedbackFromStudents"
            type="text"
            placeholder="Student Feedback"
            value={feedbackFromStudents}
            onChange={(e) => setFeedbackFromStudents(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Educational Level</label>
          <input
            className={`${styles.formInput}`}
            id="educationalLevel"
            type="text"
            placeholder="Level of Education"
            value={educationalLevel}
            onChange={(e) => setEducationalLevel(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Performance Improvements</label>
          <input
            className={`${styles.formInput}`}
            id="improvementsInPerformance"
            type="text"
            placeholder="State the Improvements In Performance"
            value={improvementsInPerformance}
            onChange={(e) => setImprovementsInPerformance(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Feedback From Educators</label>
          <input
            className={`${styles.formInput}`}
            id="feedbackFromEducators"
            type="text"
            placeholder="Educators Feedback"
            value={feedbackFromEducators}
            onChange={(e) => setFeedbackFromEducators(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Graduation Rates</label>
          <input
            className={`${styles.formInput}`}
            id="graduationRates"
            type="number"
            placeholder="The Rate of Graduations"
            value={graduationRates}
            onChange={(e) => setGraduationRates(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Total Students Benefited</label>
          <input
            className={`${styles.formInput}`}
            id="totalStudentsBenefited"
            type="number"
            placeholder="The Total Amount of Students Benefited"
            value={totalStudentsBenefited}
            onChange={(e) => setTotalStudentsBenefited(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Follow-up Success Rate</label>
          <input
            className={`${styles.formInput}`}
            id="followUpSuccessRate"
            type="number"
            placeholder="What is the Follow-up Success Rate"
            value={followUpSuccessRate}
            onChange={(e) => setFollowUpSuccessRate(e.target.value)}
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

export default StudentsBenefitingData;
