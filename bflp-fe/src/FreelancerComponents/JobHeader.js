import React from "react";
import { Dropdown } from "./Dropdown";

export const JobHeader = ({ selection, setSelection }) => {
  return (
    <div className="job-header">
      <h1 className="h12">Job Listings</h1>
      <div className="sortbox">
        <p>sort by:</p>
      </div>
    </div>
  );
};
