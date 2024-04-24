import React, { useState } from "react";
import { toast } from "react-toastify";
import { uploadFile } from "../../../../../config/storage/functions";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import "react-datepicker/dist/react-datepicker.css";
import { styles } from "../../../../../styles/styles";
import FilesInput from "../support/FilesInput";
import { SustainableAgricultureInvestment as SustainableAgricultureInvestmentType } from "../../../../../hooks/declarations/data/data.did";


const SustainableAgricultureInvestment = ({ setManualData, setUploadManually }) => {
  const [saving, setSaving] = useState(false);
  const [supportFiles, setSupportFiles] = useState<File[] | null>(null);
  const { storageInitiated } = useSelector((state: RootState) => state.app);
  const [countDown, setCountDown] = useState<number>(0);

  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  
  const [projectName, setProjectName] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<string>("");
  const [agriculturalOutput, setAgriculturalOutput] = useState("");
  const [totalInvestment, setTotalInvestment] = useState("");
  const [impactOnLocalEconomy, setImpactOnLocalEconomy] = useState<string>("");
  const [farmerFeedback, setFarmerFeedback] = useState<string>("");
  const [sustainabilityMetrics, setSustainabilityMetrics] = useState<string>("");
  const [typeOfInvestments, setTypeOfInvestments] = useState<string>("");
  const [numberOfBeneficiaries, setNumberOfBeneficiaries] = useState("");
  const [investmentSource, setInvestmentSource] = useState<string>("");
  const [technologyUsed, setTechnologyUsed] = useState<string>("");
  const [challengesFaced, setChallengesFaced] = useState<string>("");

  const handleSave = async () => {
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

      const SustainableAgricultureInvestment: SustainableAgricultureInvestmentType = {
        projectName: projectName,
        projectDescription: projectDescription,
        startDate: BigInt(startDateMilliseconds),
        endDate: BigInt(endDateMilliseconds),
        location: location,
        agriculturalOutput: BigInt(agriculturalOutput),
        totalInvestment: BigInt(totalInvestment),
        impactOnLocalEconomy: impactOnLocalEconomy,
        farmerFeedback: farmerFeedback,
        sustainabilityMetrics: sustainabilityMetrics,
        typeOfInvestments: typeOfInvestments,
        numberOfBeneficiaries: BigInt(numberOfBeneficiaries),
        investmentSource: investmentSource,
        technologyUsed: technologyUsed,
        challengesFaced: challengesFaced,
        dataVerification: false,
        supportingFiles: urls ? urls : [],
        created: BigInt(Date.now()),
      };
      setManualData(SustainableAgricultureInvestment);
      setUploadManually(false);
    } catch (error) {
      setSaving(false);
      console.log("Error saving sustainable agriculture", error);
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
             Sustainable Agriculture
          </h3>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Project Name</label>
          <input
            className={`${styles.formInput}`}
            id="projectName"
            type="string"
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
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Location</label>
          <input
            className={`${styles.formInput}`}
            id="location"
            type="string"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Agriculture Output</label>
          <input
            className={`${styles.formInput}`}
            id="agriculturalOutput"
            type="number"
            placeholder="Agricultural Output"
            value={agriculturalOutput}
            onChange={(e) => setAgriculturalOutput(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>
            Total Number of Investment
          </label>
          <input
            className={`${styles.formInput}`}
            id="totalInvestment"
            type="number"
            placeholder="Total number of Investment"
            value={totalInvestment}
            onChange={(e) => setTotalInvestment(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Immpact on the Local Economy</label>
          <input
            className={`${styles.formInput}`}
            id="impactOnLocalEconomy"
            type="string"
            placeholder="Local Economy Impact"
            value={impactOnLocalEconomy}
            onChange={(e) => setImpactOnLocalEconomy(e.target.value)}
            required
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Farmers Feedback</label>
          <input
            className={`${styles.formInput}`}
            id="farmerFeedback"
            type="string"
            placeholder="Farmers Feedback"
            value={farmerFeedback}
            onChange={(e) => setFarmerFeedback(e.target.value)}
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Sustainability Metrics</label>
          <input
            className={`${styles.formInput}`}
            id="sustainabilityMetrics"
            type="string"
            placeholder="Sustainability Metrics"
            value={sustainabilityMetrics}
            onChange={(e) => setSustainabilityMetrics(e.target.value)}
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Types of Investment</label>
          <input
            className={`${styles.formInput}`}
            id="typesOfInvestment"
            type="string"
            placeholder="Types of Investment"
            value={typeOfInvestments}
            onChange={(e) => setTypeOfInvestments(e.target.value)}
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Investment Source</label>
          <input
            className={`${styles.formInput}`}
            id="investmentSource"
            type="string"
            placeholder="Source of Investment"
            value={investmentSource}
            onChange={(e) => setInvestmentSource(e.target.value)}
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Technology Used</label>
          <input
            className={`${styles.formInput}`}
            id="technologyUsed"
            type="string"
            placeholder="Technology Used"
            value={technologyUsed}
            onChange={(e) => setTechnologyUsed(e.target.value)}
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>
            Number of Beneficiaries
          </label>
          <input
            className={`${styles.formInput}`}
            id="numberofBeneficiaries"
            type="number"
            placeholder="Number of Beneficiaries"
            value={numberOfBeneficiaries}
            onChange={(e) => setNumberOfBeneficiaries(e.target.value)}
          />
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Challenges Faced</label>
          <input
            className={`${styles.formInput}`}
            id="challengesFaced"
            type="string"
            placeholder="Challenges Faced"
            value={challengesFaced}
            onChange={(e) => setChallengesFaced(e.target.value)}
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
          onClick={handleSave}
          disabled={saving}
          className={`${styles.roundedButton}`}
        >
          {saving ? `Uploading ${countDown}` : "Save"}
        </button>
      </div>
    </div>
  );
};

export default SustainableAgricultureInvestment;
