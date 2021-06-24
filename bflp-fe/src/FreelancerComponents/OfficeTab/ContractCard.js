import React, { useState } from "react";

export const ContractCard = (props) => {
  console.log(props);
  return (
    <div className="contractcard">
      <div className="task-box">{props.data.task}</div>
      <img
        src={`data:image/jpg/png;base64,${props.data.customer.picByte}`}
        className="card-img"
      />
    </div>
  );
};
