import React from "react";
import Title from "./Title";
import { v4 as uuid } from "uuid";
import Checkbox from "./Checkbox";
import { useSelector, useDispatch } from "react-redux";

import { deleteFilter, setFilter } from "../../../store/slices/filterSlice";

import {
  addJobs,
  deleteJobsByJobCategory,
  deleteJobsBylevelCategory,
} from "../../../store/slices/jobsSlice";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase";

const CategoryItem = ({ filterData }) => {
  const dispatch = useDispatch();
  const onChangeBySpecialistLevel = async (value, e) => {
    e.stopPropagation();
    e.target.checked
      ? dispatch(setFilter({ value, category: filterData.categoryType }))
      : dispatch(deleteFilter({ value, category: filterData.categoryType }));
  };
  const onChangeByJobCategory = async (value, e) => {
    e.stopPropagation();
    e.target.checked
      ? dispatch(setFilter({ value, category: filterData.categoryType }))
      : dispatch(deleteFilter({ value, category: filterData.categoryType }));
  };

  const onChange = filterData.title.includes("job")
    ? onChangeByJobCategory
    : onChangeBySpecialistLevel;

  return (
    <Title filterTitle={filterData.title}>
      {filterData.data.map((level) => (
        <Checkbox
          categoryType={filterData.categoryType}
          onChange={onChange}
          name={level.trim()}
          countJobs="9"
          key={uuid()}
        />
      ))}
    </Title>
  );
};

export default CategoryItem;
