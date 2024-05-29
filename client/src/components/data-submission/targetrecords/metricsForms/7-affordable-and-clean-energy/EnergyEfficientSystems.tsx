import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { uploadFile } from "../../../../../config/storage/functions";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import "react-datepicker/dist/react-datepicker.css";
import { styles } from "../../../../../styles/styles";
import FilesInput from "../support/FilesInput";
import { EnergyEfficientSystemsData as EnergyEfficientSystemsDataType } from "../../../../../hooks/declarations/data/data.did";
import { ManualData } from "../../MetricRecords";
import { IoMdAdd } from "react-icons/io";
import Program from "../support/Program";

const EnergyEfficientSystemsData = ({ setManualData, setUploadManually }) => {
  const [saving, setSaving] = useState(false);
  const [supportFiles, setSupportFiles] = useState<File[] | null>(null);
  const { storageInitiated } = useSelector((state: RootState) => state.app);
  const [countDown, setCountDown] = useState<number>(0);

  const [startDate, setStartDate] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const [programName, setProgramName] = useState<string>("");
  const [typeOfSystem, setTypeOfSystem] = useState<string>("");
  const [numberOfSystemsInstalled, setNumberOfSystemsInstalled] = useState<string>("");
  const [efficiencyRate, setEfficiencyRate] = useState<string>("");

  const [programs, setPrograms] = useState<EnergyEfficientSystemsDataType[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [goal, setGoal] = useState<string>("");
  const goalareaRef = useRef<HTMLTextAreaElement>(null);
  
  const handleSubmit = async () => {
    if (goal === "") {
      toast.error("Please enter a goal", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
      return;
    }
    if (programs.length === 0) {
      toast.error("Please add at least one energy efficient systems program you did", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
      return;
    }
    try {
      const data: ManualData = {
        goal: goal,
        data: programs,
      };
      setManualData(data);
      setUploadManually(false);
    } catch (error) {
      console.log("Error saving energy efficient systems program", error);
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

  const calcHeight = (value: string): number => {
    const numberOfLineBreaks = (value.match(/\n/g) || []).length;
    return numberOfLineBreaks * 20 + 50;
  };

  useEffect(() => {
    if (goalareaRef.current) {
      goalareaRef.current.style.height = `${calcHeight(goal)}px`;
    }
  }, [goal]);

  const handleSave = async () => {
    setSaving(true);
    if(
      programName === "" ||
      startDate === "" ||
      duration === "" ||
      location === "" ||
      typeOfSystem === "" ||
      numberOfSystemsInstalled === "" ||
      efficiencyRate === ""

    ){
      toast.error("Please fill in all required fields", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
      setSaving(false);
      return;
    }
    const checkedFiles: File[] = [];
    if (supportFiles) {
      for(const file of supportFiles){
        if (file.size <= 4 * 1024 * 1024) {
          checkedFiles.push(file);
        }
      }
    }

    if(checkedFiles.length === 0){
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
    if(!urls){
      toast.error("Error uploading files", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
      setSaving(false);
      return;
    }

    const newProgram: EnergyEfficientSystemsDataType = {
      programName,
      startDate:BigInt(new Date(startDate).getTime()),
      duration,
      location,
      typeOfSystem,
      numberOfSystemsInstalled: BigInt(numberOfSystemsInstalled),
      efficiencyRate: BigInt(efficiencyRate),
      dataVerification:false,
      supportingFiles:urls,
      created:BigInt(Date.now()),
    };
    setPrograms([...programs, newProgram]);
    setProgramName("");
    setStartDate("");
    setDuration("");
    setLocation("");
    setTypeOfSystem("");
    setNumberOfSystemsInstalled("");
    setEfficiencyRate("");
    setSupportFiles(null);
    setShowForm(false);
    setSaving(false);

  };

  return (
    <div>
      <div className=" items-center">
        <h3 className="text-white mt-3 text-xl text-center font-NeueMachinaUltrabold">
          Energy Efficient Systems
        </h3>
        <div className="flex justify-end py-3">
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 text-custom-green"
          >
            <IoMdAdd />
            <span>Add a program</span>
          </button>
        </div>

        {programs.length > 0 && (
          <div className={styles.programsDiv}>
            {programs.map((program, index) => (
              <Program key={index} {...{ program, programs, setPrograms }} />
            ))}
          </div>
        )}
      </div>

      {showForm && (
        <div className={styles.munualDataForm}>
          <div className={styles.formHeader}>
            <h3 className={styles.formTitle}>
              Add a Energy Efficient Systems Program
            </h3>
          </div>
          <div className={styles.inputDiv}>
            <label htmlFor={styles.inputLabel}>What is the name of the Energy Efficient Systems program?</label>
            <input
              className={styles.formInput}
              id="programName"
              type="text"
              placeholder="Enter the name of the program focused on energy-efficient systems."
              value={programName}
              onChange={(e) => setProgramName(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputDiv}>
            <label htmlFor={styles.inputLabel}>When did this program begin?</label>
            <input
              className={styles.formInput}
              id="startDate"
              type="date"
              placeholder="Indicate when the installation of systems began."
              value={startDate}
              required
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className={styles.inputDiv}>
            <label htmlFor={styles.inputLabel}>How long has the program been running?</label>
            <input
              className={styles.formInput}
              id="duration"
              type="text"
              placeholder="Provide the duration that the systems installation program has been running."
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div className={styles.inputDiv}>
            <label htmlFor={styles.inputLabel}>Where is this program located? (City and Country)</label>
            <input
              className={styles.formInput}
              id="location"
              type="text"
              placeholder="Specify the city and country where the systems are installed."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputDiv}>
            <label htmlFor={styles.inputLabel}>What type of system is installed?</label>
            <select
              className={styles.formSelectInput}
              id="typeOfSystem"
              value={typeOfSystem}
              onChange={(e) => setTypeOfSystem(e.target.value)}
              required
            >
              <option value="">Select the type of energy-efficient system installed from the dropdown.</option>
              <option value="HVAC">HVAC</option>
              <option value="lighting">Lighting</option>
              <option value="insulation">Insulation</option>
              <option value="energy-management-systems">Energy Management Systems</option>
            </select>
          </div>
          <div className={styles.inputDiv}>
            <label htmlFor={styles.inputLabel}>How many systems are installed?</label>
            <input
              className={styles.formInput}
              id="numberOfSystemsInstalled"
              type="number"
              placeholder="Enter the number of energy-efficient systems installed under this initiative."
              value={numberOfSystemsInstalled}
              onChange={(e) => setNumberOfSystemsInstalled(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputDiv}>
            <label htmlFor={styles.inputLabel}>What is the efficiency rate?</label>
            <input
              className={styles.formInput}
              id="efficiencyRate"
              type="number"
              placeholder="Enter the efficiency rate of the energy-efficient systems installed."
              value={efficiencyRate}
              onChange={(e) => setEfficiencyRate(e.target.value)}
              required
            />
          </div>

          <div className="">
        <div className={styles.goalDiv}>
          <h3 className={styles.goalTitle}>
            What is your goal for this Metric?
          </h3>
        </div>
        <div className={styles.goalInputDiv}>
          <textarea
            ref={goalareaRef}
            className={styles.goalInput}
            id="goal"
            placeholder="Write your goal here"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            required
          />
        </div>
      </div>
          <FilesInput {...{ setSupportFiles, supportFiles }} />

          <div className={styles.buttonsDiv}>
            <button
              onClick={() => {
                setShowForm(false);
                setSaving(false);
              }}
              className="text-custom-green font-bold"
            >
              <span>Cancel</span>
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className={styles.roundedButton}
            >
              {saving ? `Saving... ${countDown}` : "Save"}
            </button>
          </div>
        </div>
      )}
       {!showForm && (
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => setUploadManually(false)}
            className={styles.roundedButton}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={saving}
            className={`${styles.roundedButton} `}
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default EnergyEfficientSystemsData;
