import React from "react";
import { SortJobs } from "../Widgets&Tools/SortJobs";
import { FilterJobs } from "../Widgets&Tools/FilterJobs";
import "../../../styles/FreelancerStyles/JobBoardTab/toolBar.css";
import { BudgetFilter } from "../Widgets&Tools/BudgetFilter";
import { Searchjobs } from "../Widgets&Tools/Searchjobs";
import { ViewController } from "../Widgets&Tools/ViewController";

export const ToolBar = ({
  sortby,
  totaljobs,
  setSortby,
  filteroptions,
  setFilteroptions,
  view,
  setView,
}) => {
  return (
    <div className="tools-cont">
      <div className="tools">
        {/* <SortJobs sortby={sortby} setSortby={setSortby} /> */}
        <Searchjobs />
        <ViewController setView={setView} view={view} />
        <FilterJobs
          filteroptions={filteroptions}
          setFilteroptions={setFilteroptions}
        />
        <BudgetFilter
          setFilteroptions={setFilteroptions}
          filteroptions={filteroptions}
        />
      </div>
    </div>
  );
};
