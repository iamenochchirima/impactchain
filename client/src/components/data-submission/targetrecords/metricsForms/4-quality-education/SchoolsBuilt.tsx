import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { uploadFile } from "../../../../../config/storage/functions";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import "react-datepicker/dist/react-datepicker.css";
import { styles } from "../../../../../styles/styles";
import FilesInput from "../support/FilesInput";
import { SchoolsSupportedData as SchoolsSupportedDataType } from "../../../../../hooks/declarations/data/data.did";
import { ManualData } from "../../MetricRecords";
import { IoMdAdd } from "react-icons/io";
import Program from "../support/Program";

const SchoolsBuiltSupportedData = ({ setManualData, setUploadManually }) => {
  const [saving, setSaving] = useState(false);
  const [supportFiles, setSupportFiles] = useState<File[] | null>(null);
  const { storageInitiated } = useSelector((state: RootState) => state.app);
  const [countDown, setCountDown] = useState<number>(0);

  const [startDate, setStartDate] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const [programName, setProgramName] = useState<string>("");
  const [numberOfSchoolsSupported, setNumberOfSchoolsSupported] = useState("");
  const [typeOfSupport, setTypeOfSupport] = useState<string>("");

  const [programs, setPrograms] = useState<SchoolsSupportedDataType[]>([]);
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
      toast.error("Please add at least one Schools Supported program you did", {
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
      console.log("Error saving school support program", error);
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
      typeOfSupport === "" ||
      numberOfSchoolsSupported === ""

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

    const newProgram: SchoolsSupportedDataType = {
      programName,
      startDate:BigInt(new Date(startDate).getTime()),
      duration,
      location,
      typeOfSupport,
      numberOfSchoolsSupported: BigInt(numberOfSchoolsSupported),
      dataVerification:false,
      supportingFiles:urls,
      created:BigInt(Date.now()),
    };
    setPrograms([...programs, newProgram]);
    setProgramName("");
    setStartDate("");
    setDuration("");
    setLocation("");
    setTypeOfSupport("");
    setNumberOfSchoolsSupported("");
    setSupportFiles(null);
    setShowForm(false);
    setSaving(false);

  };
  return (
    <div>
      <div className=" items-center">
        <h3 className="text-white text-xl text-center">
          Schools Built or Supported 
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
              Add a School Support Program
            </h3>
          </div>
          <div className={styles.inputDiv}>
            <label htmlFor={styles.inputLabel}>What is the name of the School Support program?</label>
            <input
              className={styles.formInput}
              id="programName"
              type="text"
              placeholder="Enter the specific name of the school building or support program."
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
              placeholder="Indicate when the school program was initiated."
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
              placeholder="Provide the duration that the school program has been running."
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
              placeholder="Specify the city and country where the school program is implemented."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputDiv}>
            <label htmlFor={styles.inputLabel}>What type of support is provided?</label>
            <select
              className={styles.formSelectInput}
              id="typeOfSupport"
              value={typeOfSupport}
              onChange={(e) => setTypeOfSupport(e.target.value)}
              required
            >
              <option value="">Select the primary focus of the support provided to schools from the dropdown.</option>
              <option value="financial">Infrastructure</option>
              <option value="resource-based">Curriculum</option>
              <option value="consultation">Technology</option>
              <option value="educational">Training</option>
            </select>
          </div>
          <div className={styles.inputDiv}>
            <label htmlFor={styles.inputLabel}>How many schools are built or supported?</label>
            <input
              className={styles.formInput}
              id="numberOfSchoolsSupported"
              type="number"
              placeholder="Enter the number of schools supported or built under this initiative."
              value={numberOfSchoolsSupported}
              onChange={(e) => setNumberOfSchoolsSupported(e.target.value)}
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
            placeholder="Enter your goal here"
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

export default SchoolsBuiltSupportedData;
