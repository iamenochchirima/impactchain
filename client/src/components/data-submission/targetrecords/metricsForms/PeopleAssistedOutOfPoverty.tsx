import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { uploadFile } from "../../../../config/storage/functions";
import { useSelector } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { RootState } from "../../../../redux/store";
import "react-datepicker/dist/react-datepicker.css";
import { styles } from "../../../../styles/styles";
import FilesInput from "./support/FilesInput";
import { PeopleAssistedOutOfPoverty as PeopleAssistedOutOfPovertyType } from "../../../../hooks/declarations/impact_chain_data/impact_chain_data.did";

type FormData = {
  programName: string;
  programDescription: string;
  startDate: string;
  endDate: string;
  location: string;
  totalParticipants: number;
  successfullyAssisted: number;
  averageIncomeBeforeProgram: number;
  averageIncomeAfterProgram: number;
  followUpDuration: number;
  longTermImpact: Text;
  participantFeedback: Text;
  challengesFaced: Text;
  challengesFaced: string;
};

const PeopleAssistedOutOfPoverty = ({ setManualData, setUploadManually }) => {
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
    location: z
      .string()
      .min(1, { message: "Location is required" })
      .max(200, { message: "Location must be at most 200 characters long" }),
    totalParticipants: z
      .string()
      .min(1, { message: "Total Participants is required" }),
    successfullyAssisted: z
      .string()
      .min(1, { message: "Successfully Assisted is required" })
      .max(200, {
        message: "Successfully Assisted must be at most 200 characters long",
      }),
    averageIncomeBeforeProgram: z
      .string()
      .min(1, { message: "Average Income Before Program is required" })
      .max(200, {
        message:
          "Average Income Before Program must be at most 200 characters long",
      }),
    averageIncomeAfterProgram: z
      .string()
      .min(1, { message: "Average Income After Program is required" })
      .max(200, {
        message:
          "Average Income After Program must be at most 200 characters long",
      }),
    followUpDuration: z
      .string()
      .min(1, { message: "Follow Up Duration is required" })
      .max(200, {
        message: "Follow Up Duration must be at most 200 characters long",
      }),
    longTermImpact: z
      .string()
      .min(1, { message: "Long Term Impact is required" })
      .max(200, {
        message: "Long Term Impact must be at most 200 characters long",
      }),
    participantFeedback: z
      .string()
      .min(1, { message: "Participant Feedback is required" })
      .max(200, {
        message: "Participant Feedback must be at most 200 characters long",
      }),
    challengesFaced: z
      .string()
      .min(1, { message: "Challenges Faced is required" })
      .max(200, {
        message: "Challenges Faced must be at most 200 characters long",
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

      const jobTrainingProgram: PeopleAssistedOutOfPovertyType = {
        programName: data.programName,
        programDescription: data.programDescription,
        startDate: BigInt(startDateMilliseconds),
        endDate: BigInt(endDateMilliseconds),
        location: data.location,
        totalParticipants: data.totalParticipants,
        successfullyAssisted: data.successfullyAssisted,
        averageIncomeBeforeProgram: data.averageIncomeBeforeProgram,
        averageIncomeAfterProgram: data.averageIncomeAfterProgram,
        followUpDuration: data.followUpDuration,
        longTermImpact: data.longTermImpact,
        participantFeedback: data.participantFeedback,
        challengesFaced: data.challengesFaced,
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
          <h3 className={`${styles.formTitle}`}>
            People Assisted Out of Poverty
          </h3>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Program Name</label>
          <input
            className={`${styles.formInput}`}
            id="programName"
            type="string"
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
            id="location"
            type="string"
            placeholder="Program Location"
            {...register("location")}
          />
          <p className={`${styles.errorP}`}>{errors.location?.message}</p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Total Participants</label>
          <input
            className={`${styles.formInput}`}
            id="totalParticipants"
            type="number"
            placeholder="Total Participants"
            {...register("totalParticipants")}
          />
          <p className={`${styles.errorP}`}>
            {errors.totalParticipants?.message}
          </p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Successfully Assisted</label>
          <input
            className={`${styles.formInput}`}
            id="successfullyAssisted"
            type="number"
            placeholder="Successfully Assisted"
            {...register("successfullyAssisted")}
          />
          <p className={`${styles.errorP}`}>
            {errors.successfullyAssisted?.message}
          </p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Average Income Before Program</label>
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
          <label htmlFor={`${styles.inputLabel}`}>Average Income After Program</label>
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
          <label htmlFor={`${styles.inputLabel}`}>Follow Up Duration</label>
          <input
            className={`${styles.formInput}`}
            id="followUpDuration"
            type="number"
            placeholder="Follow Up Duration"
            {...register("followUpDuration")}
          />
          <p className={`${styles.errorP}`}>
            {errors.followUpDuration?.message}
          </p>
        </div>
        <div className={`${styles.inputDiv}`}>
          <label htmlFor={`${styles.inputLabel}`}>Long Term Impact</label>
          <textarea
            className={`${styles.formInput}`}
            id="longTermImpact"
            placeholder="Long Term Impact"
            {...register("longTermImpact")}
            style={{ overflow: "hidden" }}
          />
          <p className={`${styles.errorP}`}>{errors.longTermImpact?.message}</p>
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
          <label htmlFor={`${styles.inputLabel}`}>Challenges Faced</label>
          <textarea
            className={`${styles.formInput}`}
            id="challengesFaced"
            placeholder="Challenges Faced"
            {...register("challengesFaced")}
            style={{ overflow: "hidden" }}
          />
          <p className={`${styles.errorP}`}>
            {errors.challengesFaced?.message}
          </p>
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

export default PeopleAssistedOutOfPoverty;
