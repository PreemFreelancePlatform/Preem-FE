import React, { useState } from "react";
import { daysBetween } from "../../../HelperFunctions/HelperFunctions";
import "../../../styles/FreelancerStyles/JobBoardTab/jobs.css";
import doc from "../../../assets/doc.png";
import { ReactComponent as Send } from "../../../assets/send.svg";
import { colorCodeWeb } from "../Widgets&Tools/colorcode";

export const Jobs = ({ jobs }) => {
  const [activeJob, setActiveJob] = useState(0);

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

  console.log(jobs);

  return (
    <div className="job-cont">
      <div className="label-row">
        <p className="label1">Job id</p>
        <p className="label2">Contractee</p>
        <p className="label3">Title</p>
        <p className="label4">Date</p>
        <p className="label5">Budget</p>
        <p className="label6">Tags</p>
      </div>
      {jobs.map((item, index) => (
        <div key={index} className={index === activeJob ? "row-active" : "row"}>
          <div className="id-div">
            <img src={doc} className="id-icon" />
            <p>{item.postid}</p>
          </div>
          <div className="pic-div">
            <img
              src={`data:image/jpg/png;base64,${item.customer.picByte}`}
              className="cusimage"
            />
            <p>{`${item.customer.firstname} ${item.customer.lastname}`}</p>
          </div>
          <div className="info-div">
            <p>{item.task}</p>
            <div
              className="circle"
              onMouseOver={() => {
                setActiveJob(index);
              }}
              onMouseOut={() => {
                setActiveJob(null);
              }}
              style={{ backgroundColor: colorCodeWeb[item.tags] }}
            ></div>
            {activeJob === index && (
              <div className="info-des">
                <p>{item.description}</p>
              </div>
            )}
          </div>
          <div className="date-div">
            <p>{formatDate(item.postdate)}</p>
          </div>

          <div className="money-div">
            <p>{item.budget + " $"}</p>
          </div>

          <div className="tag-div">
            <div
              className="tag-inner"
              style={{ backgroundColor: colorCodeWeb[item.tags] }}
            >
              <p>{item.tags}</p>
            </div>
          </div>
          <div className="send-div">
            <div className="icon-div">
              <Send />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

{
  /* 
<span>{"$" + item.budget}</span>
<span>{formatDate(item.postdate)}</span> 
item.tags
item.task
*/
}
