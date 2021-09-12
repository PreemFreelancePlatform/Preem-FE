import React, { useState } from "react";
import "../styles/ClientStuff.css";
import { useParams } from "react-router-dom";
import { ReactComponent as Dash } from "../assets/dashicons/home2.svg";
import { ReactComponent as Posts } from "../assets/dashicons/posts.svg";
import { ReactComponent as Chat } from "../assets/dashicons/chat1.svg";
import { ReactComponent as Cog } from "../assets/dashicons/settings3.svg";
import { ReactComponent as Tags } from "../assets/dashicons/apply1.svg";
import { ReactComponent as Work } from "../assets/dashicons/office1.svg";
import lilguy from "../aLOGOPREEM/LOGOpngFiles/lilguy.png";
import { Setup } from "../PublicComponents/Setup";
import { Logout } from "../PublicComponents/Logout";
import { ClientHome } from "./HomeTab/ClientHome";

export const CustomerDash = (props) => {
  const email = useParams();
  const text = ["Dashboard", "Jobs", "Messaging", "Settings", "Tags"];
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  // putting all components to be rendered in a obj
  const tabs = {
    0: <ClientHome user={props.data} />,
    // 1: <JobBoard data={props.data} />,
    // 2: <Office data={props.data} />,
    // 3: <Communication data={props.data} />,
    // 4: <Settings data={props.data} />,
    // 5: <Apply data={props.data} />,
  };

  // iterate through these icons, when icon is clicked change active tab to index of tab.
  // find better way to do this
  const tabList = [
    <Dash className={activeTab === 0 ? "icon-active" : "icon"} />,
    <Posts className={activeTab === 1 ? "icon-active" : "icon"} />,
    <Work className={activeTab === 2 ? "icon-active" : "icon"} />,
    <Chat className={activeTab === 3 ? "icon-active" : "icon"} />,
    <Cog className={activeTab === 4 ? "icon-active" : "icon"} />,
    <Tags className={activeTab === 5 ? "icon-active" : "icon"} />,
  ];

  const displayTab = tabs[activeTab];
  if (props.data.setup === false) {
    return <Setup data={props.data} />;
  }

  return (
    <div className="dash-flex">
      <div className="nav-box">
        <div className="logobox">
          <img className="lilguy" src={lilguy} />
        </div>
        <div className="absolute">
          {tabList.map((tab, index) => (
            <div
              onClick={() => {
                setActiveTab(index);
              }}
              className={"nav-items"}
            >
              {tab}
              <p className={"nav-text"}>{text[index]}</p>
            </div>
          ))}
          <Logout />
        </div>
      </div>

      {displayTab}
    </div>
  );
};
