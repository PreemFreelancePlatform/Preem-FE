import React, { useState, useEffect } from "react";
import "../styles/Shared-Styles/Landing.css";
import picture from "../assets/yoo.jpg";
import { ReactComponent as Logo } from "../assets/adwords.svg";

export const Landing = () => {
  return (
    <div>
      <img className="picture" src={picture} />
      <div className="blurred-box"></div>
    </div>
  );
};
