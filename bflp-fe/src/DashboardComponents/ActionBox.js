import React from "react";
import { ReactComponent as Arrowright } from "../assets/right.svg";

const ActionBox = (props) => {
  return (
    <div className="bigbox">
      <div className="bb-inner">
        <img src={props.pic} />
        <div className="inner-text">
          <p>{props.text}</p>
          <Arrowright />
        </div>
      </div>
    </div>
  );
};

export default ActionBox;
