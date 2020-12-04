import React, { useState } from "react";
import { daysBetween } from "../HelperFunctions/HelperFunctions";
import "../styles/FreelancerStyles/Job-Board/job-color-code.css";
import { colorcode } from "./colorcode";

export const Job = ({ jobs, loading, handleactive, active }) => {
  // write fucntion that only lets you apply to something once
  /*  
	|person posting|color coded stack(website)|How long ago was posted|		
	*/

  console.log(
      jobs.sort(function (a, b) {
        const todaysdate = new Date();
        return (
          daysBetween(a.postdate, todaysdate) -
          daysBetween(b.postdate, todaysdate)
        );
      })
  );

  if (loading) {
    return <h2>Loading.....</h2>;
  }

  const formatDate = (time) => {
    const todaysdate = new Date();
    let num = daysBetween(time, todaysdate);
    if (num === 0) {
      return "Posted Today";
    } else if (num === 1) {
      return "Posted Yesterday";
    } else {
      return `${num} days ago`;
    }
  };

  return (
    <div className="leftside-content">
      <div className="column-labels">
        <span className="c1">JOB REQUEST</span>
        <span className="c2">SPECIALIZATION</span>
        <span className="c3">POSTED DATE</span>
        <span className="c4">BUDGET</span>
      </div>
      {jobs.map((item, index) => (
        <div
          onClick={() => {
            handleactive(index);
          }}
          key={index}
          className={index === active ? "row-active" : "row"}
        >
          <li className="row-container1">
            <span>{item.task}</span>
          </li>
          <li className="row-container2">
            <span className={colorcode[item.specialization]}>
              {item.specialization}
            </span>
          </li>
          <li className="row-container3">
            <span>{formatDate(item.postdate)}</span>
          </li>
          <li className="row-container4">
            <span>{"$" + item.budget}</span>
          </li>
        </div>
      ))}
    </div>
  );
};
