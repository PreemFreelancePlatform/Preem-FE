import React, { useState, useEffect } from "react";
import { ContractCard } from "./ContractCard";
import "../../styles/FreelancerStyles/OfficeTab/MainStyles.css";
import { axiosWithAuth } from "../../Utils/axiosWIthAuth";

export const Office = () => {
  const [view, setView] = useState(0);
  const [contractData, setContractData] = useState();
  const [loading, setLoading] = useState(true);

  const views = ["All", "Active", "Pending", "Completed", "Dismissed"];

  useEffect(() => {
    axiosWithAuth()
      .get(`http://localhost:2019/fgetmycontracts`)
      .then((res) => {
        setContractData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err.res));
  }, []);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <div className="office-cont">
      <h1 className="officeheader">Contracts</h1>

      <div className="oTabs-cont">
        {views.map((item, index) => {
          return (
            <div
              onClick={() => {
                setView(index);
              }}
              className={view === index ? "oTab-active" : "oTabs"}
            >
              <p className="ott">{item}</p>
            </div>
          );
        })}
      </div>
      <div className="linethru"></div>

      <div className="card-cont">
        {contractData.map((item) => {
          return <ContractCard data={item} />;
        })}
      </div>
    </div>
  );
};
