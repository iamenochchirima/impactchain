import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { uploadFile } from "../../../../../config/storage/functions";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import "react-datepicker/dist/react-datepicker.css";
import { styles } from "../../../../../styles/styles";
import FilesInput from "../support/FilesInput";
import { Testimonials, WasteReductionRecyclingData as WasteReductionRecyclingDataType } from "../../../../../hooks/declarations/data/data.did";
import { ManualData } from "../../MetricRecords";
import { IoMdAdd } from "react-icons/io";
import Program from "../support/Program";
import AddTestimonial from "../support/AddTestimonial";
import { Fields, findEmptyFields, toastError } from "../../../../utils";

type Testimonial = {
  description: string;
  file: File | null;
};

const MAX_FILE_SIZE = 4 * 1024 * 1024;


const WasteReductionRecyclingData = ({ setManualData, setUploadManually }) => {
  const [saving, setSaving] = useState(false);
  const [supportFiles, setSupportFiles] = useState<File[] | null>(null);
  const { storageInitiated } = useSelector((state: RootState) => state.app);
  const [countDown, setCountDown] = useState<number>(0);

  const [startDate, setStartDate] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const [programName, setProgramName] = useState<string>("");
  const [typeOfWaste, setTypeOfWaste] = useState<string>("");
  const [recyclingProcessInvolved, setRecyclingProcessInvolved] = useState<string>("");
  const [totalWasteReduced, setTotalWasteReduced] = useState<string>("");
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [description, setDescription] = useState<string>("");
   const [objectives, setObjectives] = useState<string>("");
   const [challenges, setChallenges] = useState<string>("");
   const [notableAchievements, setNotableAchievements] = useState<string>("");
   const [futureObjectives, setFutureObjectives] = useState<string>("");
   const [plannedInitiatives, setPlannedInitiatives] = useState<string>("");
   const [communityImpact, setCommunityImpact] = useState<string>("");
   const [testimonialDescription, setTestimonialDescription] =
     useState<string>("");
   const [testimonialFile, setTestimonialFile] = useState<File | null>(null);

  const [programs, setPrograms] = useState<WasteReductionRecyclingDataType[]>([]);
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
      toast.error("Please add at least one waste reduction and recycling program you did", {
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
      console.log("Error saving waste reduction and recycling program", error);
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
    const fields: Fields = {
      programName,
      startDate,
      duration,
      location,
      typeOfWaste,
      recyclingProcessInvolved,
      totalWasteReduced,
      goal,
      description,
      objectives,
      challenges,
      notableAchievements,
      futureObjectives,
      plannedInitiatives,
      communityImpact
    };
    const emptyFields = findEmptyFields(fields);
    if (emptyFields.length > 0) {
      toastError(`Please fill in all required fields: ${emptyFields.join(', ')}`)
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

    const testMonials: Testimonials[] = [];

    for (const testimonial of testimonials) {
      if (testimonial.file) {
        if (testimonial.file.size <= MAX_FILE_SIZE) {
          const url = await uploadFile(testimonial.file, location);
          testMonials.push({
            description: testimonial.description,
            image: url,
          });
        }
      }
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

    const newProgram: WasteReductionRecyclingDataType = {
      programName,
      startDate:BigInt(new Date(startDate).getTime()),
      duration,
      location,
      recyclingProcessInvolved,
      description,
      objectives,
      notableAchievements,
      challenges,
      plannedInitiatives,
      futureObjectives,
      testimonials: testMonials,
      communityImpact,
      totalWasteReduced: BigInt(totalWasteReduced),
      dataVerification:false,
      supportingFiles:urls,
      created:BigInt(Date.now()),
    };
    setPrograms([...programs, newProgram]);
    setProgramName("");
    setStartDate("");
    setDuration("");
    setLocation("");
    setTypeOfWaste("");
    setDescription("");
    setObjectives("");
    setChallenges("");
    setNotableAchievements("");
    setFutureObjectives("");
    setPlannedInitiatives("");
    setCommunityImpact("");
    setTestimonials([]);
    setTestimonialDescription("");
    setTestimonialFile(null);
    setRecyclingProcessInvolved("");
    setTotalWasteReduced("");
    setSupportFiles(null);
    setShowForm(false);
    setSaving(false);

  };

  const handleAddTestimonial = () => {
    if (testimonialDescription === "" || !testimonialFile) {
      toastError("Please fill out all fields");
      return;
    }
    setTestimonials([
      ...testimonials,
      { description: testimonialDescription, file: testimonialFile },
    ]);
    setTestimonialDescription("");
    setTestimonialFile(null);
  };

  const handleRemoveTestimonial = (index: number) => {
    const updatedTestimonials = testimonials.filter((_, i) => i !== index);
    setTestimonials(updatedTestimonials);
  };

  const handleTestimonialFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file.size > MAX_FILE_SIZE) {
        toastError("File is too big");
        return;
      }
      setTestimonialFile(file);
    }
  };

  const handleCancelTestimonial = () => {
    setTestimonialDescription("");
    setTestimonialFile(null);
  };


  return (
    <div>
       <div className="">
        <h3 className={styles.title}>Waste Reduction and Recycling</h3>
        {programs.length === 0 && !showForm && (
          <div className={styles.addProgramDiv1}>
            <div className={styles.addProgramDiv2}>
              <p className={styles.addProgramP}>
                {programs.length > 0 && "You have not added any programs yet."}
              </p>
              <button
                onClick={() => setShowForm(true)}
                className={styles.addProgramButton}
              >
                <IoMdAdd />
                <span>Add a program</span>
              </button>
            </div>
          </div>
        )}
        <div className="mt-16">
          {programs.length > 0 && (
            <div className={styles.programsDiv}>
              {programs.map((program, index) => (
                <Program key={index} {...{ program, programs, setPrograms }} />
              ))}
            </div>
          )}
          {programs.length > 0 && (
            <div className={styles.addProgramBDiv}>
              <button
                onClick={() => setShowForm(true)}
                className={styles.addProgramButton}
              >
                <IoMdAdd />
                <span>Add a program</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {showForm && (
        <div className={styles.munualDataForm}>
          <div className={styles.formHeader}>
            <h3 className={styles.formTitle}>
              Add a Waste Reduction and Recycling Program
            </h3>
          </div>
          <div className={styles.inputDiv}>
            <label htmlFor={styles.inputLabel}>What is the name of the Waste Reduction and Recycling program?</label>
            <input
              className={styles.formInput}
              id="programName"
              type="text"
              placeholder="Enter the specific name of the waste reduction and recycling initiative."
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
              placeholder="Indicate when the initiative was initiated."
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
              placeholder="Provide the duration that the initiative has been running."
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
              placeholder="Specify the city and country where the initiative is implemented."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputDiv}>
            <label htmlFor={styles.inputLabel}>What type of waste is targeted?</label>
            <select
              className={styles.formSelectInput}
              id="typeOfWaste"
              value={typeOfWaste}
              onChange={(e) => setTypeOfWaste(e.target.value)}
              required
            >
              <option value="">Select the type of waste targeted by the reduction and recycling efforts from the dropdown.</option>
              <option value="plastic">Plastic</option>
              <option value="metal">metal</option>
              <option value="glass">glass</option>
              <option value="paper">paper</option>
              <option value="organic-waste">organic-waste</option>
            </select>
          </div>

          <div className={styles.inputDiv}>
            <label htmlFor={styles.inputLabel}>What recycling process is used?</label>
            <select
              className={styles.formSelectInput}
              id="recyclingProcessInvolved"
              value={recyclingProcessInvolved}
              onChange={(e) => setRecyclingProcessInvolved(e.target.value)}
              required
            >
              <option value="">Choose the type of recycling process used in the initiative from the dropdown.</option>
              <option value="mechanical">mechanical</option>
              <option value="chemical">chemical</option>
              <option value="organic">organic</option>
              <option value="other">other</option>
            </select>
          </div>

          <div className={styles.inputDiv}>
            <label htmlFor={styles.inputLabel}>What is the amount of total waste reduced?</label>
            <input
              className={styles.formInput}
              id="totalWasteRduced"
              type="number"
              placeholder="Specify the volume of waste reduced by this initiative."
              value={totalWasteReduced}
              onChange={(e) => setTotalWasteReduced(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputDiv}>
            <label htmlFor={styles.inputLabel}>
              Please provide a description of the program.
            </label>
            <textarea
              className={styles.textAreaInput}
              id="description"
              placeholder="Provide a description of the program."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputDiv}>
            <label htmlFor={styles.inputLabel}>
              What are the objectives of the program?
            </label>
            <textarea
              className={styles.textAreaInput}
              id="objectives"
              placeholder="Provide the objectives of the program."
              value={objectives}
              onChange={(e) => setObjectives(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputDiv}>
            <label htmlFor={styles.inputLabel}>
              What are the challenges faced in implementing the program?
            </label>
            <textarea
              className={styles.textAreaInput}
              id="challenges"
              placeholder="Provide the challenges faced in implementing the program."
              value={challenges}
              onChange={(e) => setChallenges(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputDiv}>
            <label htmlFor={styles.inputLabel}>
              What are the notable achievements of the program?
            </label>
            <textarea
              className={styles.textAreaInput}
              id="notableAchievements"
              placeholder="Provide the notable achievements of the program."
              value={notableAchievements}
              onChange={(e) => setNotableAchievements(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputDiv}>
            <label htmlFor={styles.inputLabel}>
              What are the future objectives of the program?
            </label>
            <textarea
              className={styles.textAreaInput}
              id="futureObjectives"
              placeholder="Provide the future objectives of the program."
              value={futureObjectives}
              onChange={(e) => setFutureObjectives(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputDiv}>
            <label htmlFor={styles.inputLabel}>
              What are the planned initiatives for the program?
            </label>
            <textarea
              className={styles.textAreaInput}
              id="plannedInitiatives"
              placeholder="Provide the planned initiatives for the program."
              value={plannedInitiatives}
              onChange={(e) => setPlannedInitiatives(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputDiv}>
            <label htmlFor={styles.inputLabel}>
              What is the community impact of the program?
            </label>
            <textarea
              className={styles.textAreaInput}
              id="communityImpact"
              placeholder="Briefly describe the community impact of the program."
              value={communityImpact}
              onChange={(e) => setCommunityImpact(e.target.value)}
              required
            />
          </div>
          <hr />
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

          <hr className="my-10" />

          {/* Testimonials */}

          <AddTestimonial
            {...{
              testimonials,
              handleCancelTestimonial,
              setTestimonialDescription,
              testimonialDescription,
              handleRemoveTestimonial,
              testimonialFile,
              handleTestimonialFileChange,
              handleAddTestimonial,
            }}
          />

          <hr className="mt-10" />

          <FilesInput {...{ setSupportFiles, supportFiles }} />

          <hr />

          <div className={styles.buttonsDiv}>
            <button
              onClick={() => {
                setShowForm(false);
                setSaving(false);
              }}
              className={styles.cancelButton}
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
        <div className={styles.bottomDiv}>
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

export default WasteReductionRecyclingData;