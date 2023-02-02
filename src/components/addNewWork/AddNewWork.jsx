import React, { useCallback, useEffect, useState } from "react";
import style from "./addNewWork.module.scss";

import TextEditor from "../textEditor/TextEditor";
import parse from "html-react-parser";

import { useForm } from "react-hook-form";

import {
  addAllData,
  addDecr,
  addInfo,
  addqual,
  addRespos,
  changeJobSlice,
} from "../../store/slices/newJobSlice";

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Select from "../select/Select";

import TextField from "@mui/material/TextField";

import { INDUSTRIES_LEVELS } from "../../constants/options";
import { useNavigate, useParams } from "react-router";
import BasicButtons from "../../UI/Button";
import InputField from "../login/input/Input";

const AddNewWork = () => {
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectEditor = useSelector((state) => state.newJobSlice);

  const [editorData, setEditorData] = useState({
    description: selectEditor.description,
    responsibilities: selectEditor.responsibilities,
    qualifications: selectEditor.qualifications,
    additionalInformation: selectEditor.additionalInformation,
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    control,
    reset,
  } = useForm({
    mode: "all",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = (data) => {
    reset();
    dispatch(
      changeJobSlice({
        description: editorData.description,
        responsibilities: editorData.responsibilities,
        qualifications: editorData.qualifications,
        additionalInformation: editorData.additionalInformation,
        category: data.category,
        date: data.date,
        industry: data.industry,
        jobName: data.jobName,
        level: data.level,
        location: data.location,
        JobType: data.JobType,
      })
    );

    id ? navigate(`/jobInfoToCompany/${id}`) : navigate(`/jobInfo`);
  };

  return (
    <div className={style.addBlock}>
      <div className="container">
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.item}>
            <h3>Job Name</h3>
            <TextField
              defaultValue={selectEditor.jobName}
              sx={{ width: "100%" }}
              name="jobName"
              color="success"
              InputLabelProps={{
                shrink: true,
              }}
              label="Job Name"
              variant="outlined"
              {...register("jobName", { required: "required your job name" })}
              error={!!errors.jobName}
              helperText={errors?.jobName ? errors?.jobName.message : null}
            />
          </div>
          {/* <FormControl variant="outlined" fullWidth error={!!errors.type}>
          <InputLabel>Type</InputLabel>
          <Controller
            name="type"
            control={control}
            defaultValue=""
            rules={{ required: "Requaired" }}
            render={({ onChange, value }) => (
              <Select onChange={onChange} value={value}>
                <MenuItem value="">None</MenuItem>
                <MenuItem value="fulltime">Full-time</MenuItem>
                <MenuItem value="parttime">Part-time</MenuItem>
                <MenuItem value="contract">Contract</MenuItem>
                <MenuItem value="internship">Internship</MenuItem>
              </Select>
            )}
          />

          {errors?.type && (
            <FormHelperText>{errors?.type.message}</FormHelperText>
          )}
        </FormControl> */}

          <div className={style.item}>
            <h3>Job Idustry</h3>
            <Select
              addstyles={true}
              value={selectEditor.industry}
              name="industry"
              register={register}
              errors={errors}
              options={INDUSTRIES_LEVELS}
            />
          </div>

          <div className={style.item}>
            <h3>Job Type</h3>
            <Select
              addstyles={true}
              value={selectEditor.JobType}
              name="JobType"
              register={register}
              errors={errors}
              options={INDUSTRIES_LEVELS}
            />
          </div>

          <div className={style.item}>
            <h3>Job Category</h3>
            <Select
              addstyles={true}
              value={selectEditor.category}
              name="category"
              register={register}
              errors={errors}
              options={INDUSTRIES_LEVELS}
            />
          </div>

          <div className={style.item}>
            <h3>Job Location</h3>
            <Select
              addstyles={true}
              name="location"
              value={selectEditor.location}
              register={register}
              errors={errors}
              options={INDUSTRIES_LEVELS}
            />
          </div>

          <div className={style.item}>
            <h3>Required candidate level</h3>
            <Select
              addstyles={true}
              name="level"
              value={selectEditor.level}
              register={register}
              errors={errors}
              options={INDUSTRIES_LEVELS}
            />
          </div>

          <div className={style.item}>
            <h3>Deadline</h3>
            <InputField
              defaultValue={selectEditor.date}
              type="date"
              register={register}
              name="date"
              errors={errors}
            />
          </div>

          <div className={style.itemEditor}>
            <h3>Job description</h3>
            <TextEditor
              value={editorData.description}
              onChange={(editorState) => {
                setEditorData({
                  ...editorData,
                  description: editorState,
                });
              }}
            />
          </div>

          <div className={style.itemEditor}>
            <h3>Job Responsibilities</h3>
            <TextEditor
              onChange={(editorState) => {
                setEditorData({
                  ...editorData,
                  responsibilities: editorState,
                });
              }}
              value={editorData.responsibilities}
            />
          </div>

          <div className={style.itemEditor}>
            <h3>Job Qualifications</h3>
            <TextEditor
              value={editorData.qualifications}
              onChange={(editorState) => {
                setEditorData({
                  ...editorData,
                  qualifications: editorState,
                });
              }}
            />
          </div>

          <div className={style.itemEditor}>
            <h3>Additional information</h3>
            <TextEditor
              value={editorData.additionalInformation}
              onChange={(editorState) => {
                setEditorData({
                  ...editorData,
                  additionalInformation: editorState,
                });
              }}
            />
          </div>

          <BasicButtons type="submit">Save</BasicButtons>
        </form>
      </div>
    </div>
  );
};

export default AddNewWork;
