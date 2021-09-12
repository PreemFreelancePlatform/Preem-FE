import React from "react";

const Greet = (props) => {
  return (
    <div className="greet-div">
      <h1>{`Hello, ${props.name}`}</h1>
      <div className="greet-subtext">{props.children}</div>
    </div>
  );
};

export default Greet;
