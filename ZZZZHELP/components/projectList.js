import React from "react";

export const ProjectList = (props) => {
  return (
    <div className='view'>
      <p>{props.data.name}</p>
      <p>{props.data.description}</p>
      <p>{props.data.background}</p>
      <p>{props.data.city}</p>
      <p>{props.data.state}</p>
    </div>
  );
};


