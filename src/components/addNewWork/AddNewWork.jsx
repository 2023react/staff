import React, { useCallback, useState } from "react";
import style from "./addNewWork.module.scss";

import TextEditor from "../textEditor/TextEditor";
import parse from "html-react-parser";

import { Controller, useForm } from "react-hook-form";

import {
  addAllData,
  addDecr,
  addInfo,
  addqual,
  addRespos,
} from "../../store/slices/newJobSlice";

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Select from "../select/Select";

import TextField from "@mui/material/TextField";

import { INDUSTRIES_LEVELS } from "../../constants/options";
import { useNavigate } from "react-router";
import BasicButtons from "../../UI/Button";
import InputField from "../login/input/Input";

const AddNewWork = () => {
  const navigate = useNavigate();
  const a = useSelector((state) => state.newJobSlice);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    control,
    reset,
  } = useForm({
    mode: "all",
  });

  const dispatch = useDispatch();
  const refDescription = useRef();
  const refResponsibilities = useRef();
  const refQualifications = useRef();
  const additionalInformation = useRef();

  const onSubmit = (data) => {
    reset();
    dispatch(addDecr(parse(`${refDescription.current}`)));
    dispatch(addRespos(parse(`${refResponsibilities.current}`)));
    dispatch(addqual(parse(`${refQualifications.current}`)));
    dispatch(addInfo(parse(`${additionalInformation.current}`)));

    dispatch(addAllData(data));
    navigate("/jobInfo");
  };

  return (
    <div className={style.addBlock}>
      <div className="container">
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.item}>
            <h3>Job Name</h3>
            <TextField
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
              register={register}
              errors={errors}
              options={INDUSTRIES_LEVELS}
            />
          </div>

          <div className={style.item}>
            <h3>Deadline</h3>
            <InputField
              type="date"
              register={register}
              name="date"
              errors={errors}
            />
          </div>

          <div className={style.itemEditor}>
            <h3>Job description</h3>
            <TextEditor html={refDescription} />
          </div>

          <div className={style.itemEditor}>
            <h3>Job Responsibilities</h3>
            <TextEditor html={refResponsibilities} />
          </div>

          <div className={style.itemEditor}>
            <h3>Job Qualifications</h3>
            <TextEditor html={refQualifications} />
          </div>

          <div className={style.itemEditor}>
            <h3>Additional information</h3>
            <TextEditor html={additionalInformation} />
          </div>
          {/* <TextEditor html={refResponsibilities} />
      <TextEditor html={refQualifications} /> */}
          <BasicButtons type="submit">Save</BasicButtons>
        </form>
      </div>
    </div>
  );
};

export default AddNewWork;
