import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { uploadFile } from "../../../../../config/storage/functions";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import "react-datepicker/dist/react-datepicker.css";
import { styles } from "../../../../../styles/styles";
import FilesInput from "../support/FilesInput";
import {  MicroloanProgram } from "../../../../../hooks/declarations/data/data.did";
import { ManualData } from "../../MetricRecords";
import { IoMdAdd } from "react-icons/io";
import Program from "./Program";

const  MicroloansProgram = ({ setManualData, setUploadManually }) => {
  const [saving, setSaving] = useState(false);
  const [supportFiles, setSupportFiles] = useState<File[] | null>(null);
  const { storageInitiated } = useSelector((state: RootState) => state.app);
  const [countDown, setCountDown] = useState<number>(0);
  const [programName, setProgramName] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [programLocation, setProgramLocation] = useState<string>("");
  const [typeOfProgram, setTypeOfProgram] = useState<string>("");
  const [numberOfLoans, setNumberOfLoans] = useState<string>("");
  const [amountDisbursed, setAmountDisbursed] = useState<string>("");


  const [programs, setPrograms] = useState<MicroloanProgram[]>([]);

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
      toast.error("Please add at least one job training program you did", {
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
    if (
      programName === "" ||
      startDate === "" ||
      duration === "" ||
      programLocation === "" ||
      numberOfLoans === "" ||
      amountDisbursed === "" ||
      typeOfProgram === ""
    ) {
      toast.error("Please fill out all fields", {
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
    if (!urls) {
      toast.error("Error uploading files", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
      setSaving(false);
      return;
    }
    const newProgram: MicroloanProgram = {
      programName,
      startDate: BigInt(new Date(startDate).getTime()),
      duration,
      location: programLocation,
      typeOfSupport: typeOfProgram,
      numberOfLoans: BigInt(numberOfLoans),
      amountDisbursed: BigInt(amountDisbursed),
      dataVerification: false,
      supportingFiles: urls,
      created: BigInt(Date.now()),
    };
    setPrograms([...programs, newProgram]);
    setProgramName("");
    setStartDate("");
    setDuration("");
    setProgramLocation("");
    setTypeOfProgram("");
    setNumberOfLoans("");
    setAmountDisbursed("");
    setSupportFiles(null);
    setShowForm(false);
    setSaving(false);
  };

  return (
    <div>
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

      <div className=" items-center">
        <h3 className="text-white text-xl text-center">
          Your Job Training/Educational Programs
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
          <div className=" border-x border-y border-custom-green flex flex-col gap-2 rounded p-3">
            {programs.map((program, index) => (
              <Program key={index} {...{ program, programs, setPrograms }} />
            ))}
          </div>
        )}
      </div>

      {showForm && (
        <div className={styles.munualDataForm}>
          <div className={styles.formHeader}>
            <h3 className={styles.formTitle}>Job Training Program</h3>
          </div>
          <div className={styles.inputDiv}>
            <label htmlFor={styles.inputLabel}>Program Name</label>
            <input
              className={styles.formInput}
              id="programName"
              type="goal"
              placeholder="Program Name"
              value={programName}
              onChange={(e) => setProgramName(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputDiv}>
            <label htmlFor={styles.inputLabel}>Start Date</label>
            <input
              className={styles.formInput}
              id="startDate"
              type="date"
              placeholder="Start Date"
              value={startDate}
              required
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className={styles.inputDiv}>
            <label htmlFor={styles.inputLabel}>End Date</label>
            <input
              className={styles.formInput}
              id="duration"
              type="goal"
              placeholder="Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div className={styles.inputDiv}>
            <label htmlFor={styles.inputLabel}>Program Location</label>
            <input
              className={styles.formInput}
              id="programLocation"
              type="goal"
              placeholder="Program Location"
              value={programLocation}
              onChange={(e) => setProgramLocation(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputDiv}>
            <label htmlFor={styles.inputLabel}>Type of Program</label>
            <input
              className={styles.formInput}
              id="typeOfProgram"
              type="text"
              placeholder="Type of Program"
              value={typeOfProgram}
              onChange={(e) => setTypeOfProgram(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputDiv}>
            <label htmlFor={styles.inputLabel}>Number of Loans</label>
            <input
              className={styles.formInput}
              id="numberOfLoans"
              type="number"
              placeholder="Number of Loans"
              value={numberOfLoans}
              onChange={(e) => setNumberOfLoans(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputDiv}>
            <label htmlFor={styles.inputLabel}>Amount Disbursed</label>
            <input
              className={styles.formInput}
              id="amountDisbursed"
              type="number"
              placeholder="Amount Disbursed"
              value={amountDisbursed}
              onChange={(e) => setAmountDisbursed(e.target.value)}
              required
            />
          </div>
          <FilesInput {...{ setSupportFiles, supportFiles }} />

          <div className="flex justify-center gap-3 items-center py-4 border-t border-gray-200">
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

export default MicroloansProgram;
