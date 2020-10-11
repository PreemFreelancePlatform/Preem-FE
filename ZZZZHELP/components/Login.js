import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LoginI } from "./Logini";
import { LoginA } from "./LoginA";


export const Login = () => {
  const [investor, setInvestor] = useState(true);
  const [applicant, setApplicant] = useState(false);

  const handleToggleI = (e) => {
    setApplicant(false);
    setInvestor(true);
  };

  const handleToggleA = (e) => {
    setInvestor(false);
    setApplicant(true);
  };

  return (
    <div className="signup">
      <div>
        <ul className="links">
          <li>
            <span onClick={handleToggleI} className={investor ? "toggleOn" : "toggleOff"} to="/signup/investor">investor</span>
            <span onClick={handleToggleA} className={applicant ? "toggleOn" : "toggleOff"}>applicant</span>
          </li>
        </ul>
      </div>
      {investor ? <LoginI /> : <LoginA />}
      <span> Don't have an account?</span> <Link className='Log' to="/signup">sign up here</Link>
    </div>
  )}
