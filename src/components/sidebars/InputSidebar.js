import React from "react";

const InputSidebar = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Search all staff.am jobs</h1>
          <div class="search-autocomplete-bar">
            <input
              type="text"
              id="jobsfilter-key_word"
              value
              placeholder="All keywords"
              autocomplete="off"
            />
          </div>
          <button type="submit" id="btn_search_keyword">
            Search
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default InputSidebar;
