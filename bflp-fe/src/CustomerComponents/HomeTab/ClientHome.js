import React from "react";
import ActionBox from "../../DashboardComponents/ActionBox";
import Greet from "../../DashboardComponents/Greet";
import { Header } from "../../PublicComponents/Header";
import newpost from "../../assets/add.png";
import peeps from "../../assets/group.png";
import { AnalyticThing } from "../../DashboardComponents/AnalyticThing";

export const ClientHome = (props) => {
  const date = new Date();

  return (
    <div className="client-home">
      <Header title={"Dashboard"} />
      {/* <Greet name={props.user.firstname}>
        <span>here is what you got going on</span>
        <span className="bold-text">{` today ${date.toDateString()}`}</span>
      </Greet> */}
      <div className="clientHome-content">
        <div className="big-boxes">
          <ActionBox pic={newpost} text={"Create New Jobpost"} />
          <ActionBox pic={peeps} text={"Browse Preem Freelancers"} />
        </div>
        <AnalyticThing />
      </div>
    </div>
  );
};
