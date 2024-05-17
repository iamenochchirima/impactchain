
import { useState } from "react";
import { toast } from "react-toastify";
import { uploadFile } from "../../../../../config/storage/functions";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import "react-datepicker/dist/react-datepicker.css";
import { styles } from "../../../../../styles/styles";
import FilesInput from "../support/FilesInput";
import {WaterConservationInitiativesData as WaterConservationInitiativesDataType } from "../../../../../hooks/declarations/data/data.did";


const WaterConservation = ({ setManualData, setUploadManually }) => {
  const [saving, setSaving] = useState(false);
  const [supportFiles, setSupportFiles] = useState<File[] | null>(null);
  const {storageInitiated } = useSelector((state: RootState) => state.app);
  const [countDown, setCountDown] = useState<number>(0);

  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const [facilityName, setFacilityName] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<string>("");

  
  const [typeOfFacilities, setTypeOfFacilities] = useState<string>("");
  const [feedbackFromCommunity, setFeedbackFromCommunity] = useState<string>("");
  const [impactOnHealth, setImpactOnHealth] = useState<string>("");
  const [operationalChallenges, setOperationalChallenges] = useState<string>("");
  const [completionDate, setCompletionDate] = useState<string>("");
  const [complianceWithStandards, setComplianceWithStandards] = useState<string>("");
  const [numberOfFacilitiesBuilt, setNumberOfFacilitiesBuilt] = useState("");
  const [numberOfFacilitiesRenovated, setNumberOfFacilitiesRenovated] = useState("");
  const [totalInvestment, setTotalInvestment] = useState("");
  const [populationServed, setPopulationServed] = useState("");
  

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

      // const SanitationFacilitiesData : SanitationFacilitiesDataType = {
      //   startDate: BigInt(startDateMilliseconds),
      //   endDate: BigInt(endDateMilliseconds),
      //   location: location,
      //   facilityName: facilityName,
      //   projectDescription: projectDescription,
      //   typeOfFacilities: typeOfFacilities,
      //   feedbackFromCommunity: feedbackFromCommunity,
      //   impactOnHealth: impactOnHealth,
      //   operationalChallenges: operationalChallenges,
      //   completionDate:completionDate,
      //   complianceWithStandards:complianceWithStandards,
      //   numberOfFacilitiesBuilt: BigInt(numberOfFacilitiesBuilt),
      //   numberOfFacilitiesRenovated: BigInt(numberOfFacilitiesRenovated),
      //   totalInvestment: BigInt(totalInvestment),
      //   populationServed: BigInt(populationServed),
      //   dataVerification: false,
      //   supportingFiles: urls ? urls : [],
      //   created: BigInt(Date.now()),
      // };
      // setManualData(SanitationFacilitiesData);
      setUploadManually(false);
    } catch (error) {
        setSaving(false);
      console.log("Error saving Sanitation Facilities Data", error);
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
          <h3 className={`${styles.formTitle}`}>Sanitation Facilities Data</h3>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Facility Name</label>
          <input
            className={`${styles.formInput}`}
            id="facilityName"
            type="text"
            placeholder="Name of the Facility"
            value={facilityName}
            onChange={(e) => setFacilityName(e.target.value)}
            required
          />

        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Project Description</label>
          <textarea
            className={`${styles.formInput}`}
            id="projectDescription"
            placeholder="Description of the Project"
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
          <label htmlFor={`${styles.inputLabel}`}>Type Of Facilities</label>
          <input
            className={`${styles.formInput}`}
            id="typeOfFacilities"
            type="text"
            placeholder="Type of Facilities"
            value={typeOfFacilities}
            onChange={(e) => setTypeOfFacilities(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Feedback From Community</label>
          <input
            className={`${styles.formInput}`}
            id="feedbackFromCommunity"
            type="text"
            placeholder="Communities Feedback"
            value={feedbackFromCommunity}
            onChange={(e) => setFeedbackFromCommunity(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Impact On Health</label>
          <input
            className={`${styles.formInput}`}
            id="impactOnHealth"
            type="text"
            placeholder="The Impact on Health"
            value={impactOnHealth}
            onChange={(e) => setImpactOnHealth(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Operational Challenges</label>
          <input
            className={`${styles.formInput}`}
            id="operationalChallenges"
            type="text"
            placeholder="Operational Challenges Faced"
            value={operationalChallenges}
            onChange={(e) => setOperationalChallenges(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Completion Date</label>
          <input
            className={`${styles.formInput}`}
            id="completionDate"
            type="text"
            placeholder="Date of Completion"
            value={completionDate}
            onChange={(e) => setCompletionDate(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Compliance With Standards</label>
          <input
            className={`${styles.formInput}`}
            id="complianceWithStandards"
            type="text"
            placeholder="Compliance with Standards"
            value={complianceWithStandards}
            onChange={(e) => setComplianceWithStandards(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Number Of Facilities Built</label>
          <input
            className={`${styles.formInput}`}
            id="numberOfFacilitiesBuilt"
            type="number"
            placeholder="Number of Facilities Built"
            value={numberOfFacilitiesBuilt}
            onChange={(e) => setNumberOfFacilitiesBuilt(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Number of Facilities Renovated</label>
          <input
            className={`${styles.formInput}`}
            id="numberOfFacilitiesRenovated"
            type="number"
            placeholder="Number of Facilities Renovated"
            value={numberOfFacilitiesRenovated}
            onChange={(e) => setNumberOfFacilitiesRenovated(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Total Investment</label>
          <input
            className={`${styles.formInput}`}
            id="totalInvesment"
            type="number"
            placeholder="Total Investment Amount"
            value={totalInvestment}
            onChange={(e) => setTotalInvestment(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Population Served</label>
          <input
            className={`${styles.formInput}`}
            id="populationServed"
            type="number"
            placeholder="Number of People Served"
            value={populationServed}
            onChange={(e) => setPopulationServed(e.target.value)}
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

export default WaterConservation;
