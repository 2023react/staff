import React from "react";

const Title = ({ children }) => {
  return (
    <div class="categories-sidebar">
      <h2>Filter by job category</h2>
      <div class="form-group field-jobsfilter-category">
        {children}

        <div class="help-block"></div>
      </div>{" "}
    </div>
  );
};

export default Title;
