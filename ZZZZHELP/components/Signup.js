import React, { useState } from "react";


import { InvestorSignIn } from "./InvestorSignIn";
import { ApplicantSignIn } from "./ApplicantSignIn";

export const Signup = () => {

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
      {investor ? <InvestorSignIn /> : <ApplicantSignIn />}
    </div>


    




  );
};
