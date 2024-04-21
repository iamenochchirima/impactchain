import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { set, z } from "zod";
import { uploadFile } from "../../../../config/storage/functions";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import "react-datepicker/dist/react-datepicker.css";
import { styles } from "../../../../styles/styles";
import FilesInput from "./support/FilesInput";
import { JobTrainingProgram as JobTrainingProgramType } from "../../../../hooks/declarations/impact_chain_data/impact_chain_data.did";

type FormData = {
  programName: string;
  programDescription: string;
  startDate: string;
  endDate: string;
  programLocation: string;
  targetDemographic: string;
  numberOfParticipants: number;
  completionRate: number;
  programBudget: number;
  fundingSources: string;
  resourcesProvided: string;
  skillsDeveloped: string;
  employmentRatePostProgram: number;
  averageIncomeBeforeProgram: number;
  averageIncomeAfterProgram: number;
  participantFeedback: string;
  successStories: string;
};

const JobTrainingProgram = ({ setManualData, setUploadManually }) => {
  const [saving, setSaving] = useState(false);
  const [supportFiles, setSupportFiles] = useState<File[] | null>(null);
  const { storageInitiated } = useSelector((state: RootState) => state.app);
  const [countDown, setCountDown] = useState<number>(0);

  const schema = z.object({
    programName: z
      .string()
      .min(1, { message: "Name must be at least 2 characters long" })
      .max(200, { message: "Name must be at most 200 characters long" }),
    programDescription: z
      .string()
      .min(1, {
        message: "Description must be at least 2 characters long",
      })
      .max(500, { message: "Description must be at most 500 characters long" }),
    startDate: z.string().min(1, { message: "Start Date is required" }),
    endDate: z.string(),
    programLocation: z.string().min(1, { message: "Location is required" }),
    targetDemographic: z
      .string()
      .min(1, { message: "Demographic is required" })
      .max(200, { message: "Demographic must be at most 200 characters long" }),
    numberOfParticipants: z
      .string()
      .min(1, { message: "Number of participants is required" })
      .max(100, {
        message: "Number of participants must be at most 100 characters long",
      }),
    completionRate: z
      .string()
      .min(1, { message: "Completion rate is required" })
      .max(100, {
        message: "Completion rate must be at most 100 characters long",
      }),
    programBudget: z
      .string()
      .min(1, { message: "Program budget is required" })
      .max(500, {
        message: "Program budget must be at most 500 characters long",
      }),
    fundingSources: z
      .string()
      .min(1, { message: "Funding sources are required" })
      .max(200, {
        message: "Funding sources must be at most 200 characters long",
      }),
    resourcesProvided: z
      .string()
      .min(1, { message: "Resources provided are required" })
      .max(200, {
        message: "Resources provided must be at most 200 characters long",
      }),
    skillsDeveloped: z
      .string()
      .min(1, { message: "Skills developed are required" })
      .max(500, {
        message: "Skills developed must be at most 500 characters long",
      }),
    employmentRatePostProgram: z.string(),
    averageIncomeBeforeProgram: z.string(),
    averageIncomeAfterProgram: z.string(),
    participantFeedback: z
      .string()
      .max(500, { message: "Feedback must be at most 500 characters long" }),
    successStories: z.string().max(500, {
      message: "Success stories must be at most 500 characters long",
    }),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const handleSave = async (data: FormData) => {
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

      const startDateMilliseconds = new Date(data.startDate).getTime();
      const endDateMilliseconds = new Date(data.endDate).getTime();

      const jobTrainingProgram: JobTrainingProgramType = {
        programName: data.programName,
        programDescription: data.programDescription,
        startDate: BigInt(startDateMilliseconds),
        endDate: data.endDate ? [BigInt(endDateMilliseconds)] : [],
        programLocation: data.programLocation,
        targetDemographic: data.targetDemographic,
        numberOfParticipants: BigInt(data.numberOfParticipants),
        completionRate: data.completionRate.toString(),
        programBudget: BigInt(data.programBudget),
        fundingSources: data.fundingSources,
        resourcesProvided: data.resourcesProvided,
        skillsDeveloped: data.skillsDeveloped,
        employmentRatePostProgram: data.employmentRatePostProgram.toString(),
        averageIncomeBeforeProgram: BigInt(data.averageIncomeBeforeProgram),
        averageIncomeAfterProgram: BigInt(data.averageIncomeAfterProgram),
        participantFeedback: data.participantFeedback,
        successStories: data.successStories,
        dataVerification: false,
        supportingFiles: urls ? urls : [],
        created: BigInt(Date.now()),
      };
      setManualData(jobTrainingProgram);
      setUploadManually(false);
    } catch (error) {
        setSaving(false);
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

  return (
    <div>
      <form className={`${styles.munualDataForm}`}>
        <div className={`${styles.formHeader}`}>
          <h3 className={`${styles.formTitle}`}>Job Training Program</h3>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Program Name</label>
          <input
            className={`${styles.formInput}`}
            id="programName"
            type="text"
            placeholder="Program Name"
            {...register("programName")}
          />
          <p className={`${styles.errorP}`}>{errors.programName?.message}</p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Program Description</label>
          <textarea
            className={`${styles.formInput}`}
            id="programDescription"
            placeholder="Program Description"
            {...register("programDescription")}
            style={{ overflow: "hidden" }}
          />
          <p className={`${styles.errorP}`}>
            {errors.programDescription?.message}
          </p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Start Date</label>
          <input
            className={`${styles.formInput}`}
            id="startDate"
            type="date"
            placeholder="Start Date"
            {...register("startDate")}
          />

          <p className={`${styles.errorP}`}>{errors.startDate?.message}</p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>End Date</label>
          <input
            className={`${styles.formInput}`}
            id="endDate"
            type="date"
            placeholder="End Date"
            {...register("endDate")}
          />
          <p className={`${styles.errorP}`}>{errors.endDate?.message}</p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Program Location</label>
          <input
            className={`${styles.formInput}`}
            id="programLocation"
            type="text"
            placeholder="Program Location"
            {...register("programLocation")}
          />
          <p className={`${styles.errorP}`}>
            {errors.programLocation?.message}
          </p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Target Demographic</label>
          <input
            className={`${styles.formInput}`}
            id="targetDemographic"
            type="text"
            placeholder="Target Demographic"
            {...register("targetDemographic")}
          />
          <p className={`${styles.errorP}`}>
            {errors.targetDemographic?.message}
          </p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Number of Participants</label>
          <input
            className={`${styles.formInput}`}
            id="numberOfParticipants"
            type="number"
            placeholder="Number of Participants"
            {...register("numberOfParticipants")}
          />
          <p className={`${styles.errorP}`}>
            {errors.numberOfParticipants?.message}
          </p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Completion Rate (%)</label>
          <input
            className={`${styles.formInput}`}
            id="completionRate"
            type="number"
            placeholder="Completion Rate e.g 67.5"
            {...register("completionRate")}
          />
          <p className={`${styles.errorP}`}>{errors.completionRate?.message}</p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Program Budget</label>
          <input
            className={`${styles.formInput}`}
            id="programBudget"
            type="number"
            placeholder="Program Budget"
            {...register("programBudget")}
          />
          <p className={`${styles.errorP}`}>{errors.programBudget?.message}</p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Funding Sources</label>
          <input
            className={`${styles.formInput}`}
            id="fundingSources"
            type="text"
            placeholder="Funding Sources"
            {...register("fundingSources")}
          />
          <p className={`${styles.errorP}`}>{errors.fundingSources?.message}</p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Resources Provided</label>
          <input
            className={`${styles.formInput}`}
            id="resourcesProvided"
            type="text"
            placeholder="Resources Provided"
            {...register("resourcesProvided")}
          />
          <p className={`${styles.errorP}`}>
            {errors.resourcesProvided?.message}
          </p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Skills Developed</label>
          <input
            className={`${styles.formInput}`}
            id="skillsDeveloped"
            type="text"
            placeholder="Skills Developed"
            {...register("skillsDeveloped")}
          />
          <p className={`${styles.errorP}`}>
            {errors.skillsDeveloped?.message}
          </p>
        </div>

        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>
            Employment Rate Post Program
          </label>
          <input
            className={`${styles.formInput}`}
            id="employmentRatePostProgram"
            type="number"
            placeholder="Employment Rate Post Program e.g 50.5"
            {...register("employmentRatePostProgram")}
          />
          <p className={`${styles.errorP}`}>
            {errors.employmentRatePostProgram?.message}
          </p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>
            Average Income Before Program
          </label>
          <input
            className={`${styles.formInput}`}
            id="averageIncomeBeforeProgram"
            type="number"
            placeholder="Average Income Before Program"
            {...register("averageIncomeBeforeProgram")}
          />
          <p className={`${styles.errorP}`}>
            {errors.averageIncomeBeforeProgram?.message}
          </p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>
            Average Income After Program
          </label>
          <input
            className={`${styles.formInput}`}
            id="averageIncomeAfterProgram"
            type="number"
            placeholder="Average Income After Program"
            {...register("averageIncomeAfterProgram")}
          />
          <p className={`${styles.errorP}`}>
            {errors.averageIncomeAfterProgram?.message}
          </p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Participant Feedback</label>
          <textarea
            className={`${styles.formInput}`}
            id="participantFeedback"
            placeholder="Participant Feedback"
            {...register("participantFeedback")}
            style={{ overflow: "hidden" }}
          />
          <p className={`${styles.errorP}`}>
            {errors.participantFeedback?.message}
          </p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Success Stories</label>
          <textarea
            className={`${styles.formInput}`}
            id="successStories"
            placeholder="Success Stories"
            {...register("successStories")}
            style={{ overflow: "hidden" }}
          />
          <p className={`${styles.errorP}`}>{errors.successStories?.message}</p>
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
          onClick={handleSubmit(handleSave)}
          disabled={saving}
          className={`${styles.roundedButton}`}
        >
          {saving ? `Uploading ${countDown}` : "Save"}
        </button>
      </div>
    </div>
  );
};

export default JobTrainingProgram;
