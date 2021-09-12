import React, { useState, useEffect, useRef } from "react";
import { axiosWithAuth } from "../../../Utils/axiosWIthAuth";
import "../../../styles/FreelancerStyles/JobBoardTab/tabHeader.css";
import { Jobs } from "./Jobs";
import {
  sortOnLoad,
  UpdateOnResize,
} from "../../../HelperFunctions/HelperFunctions";
import { JobHeader, ToolBar } from "./ToolBar";
import { Pagination } from "../Widgets&Tools/Pagination";
import { Header } from "../../../PublicComponents/Header";

export const JobBoard = (props) => {
  const [activeJob, setActiveJob] = useState(0);
  const [sortBy, setSortBy] = useState("none");
  const [view, setView] = useState("row");
  const [pageSize, setPagesize] = useState(6);

  const [request, setRequest] = useState({
    posts: [],
    loading: true,
    totalPages: 0,
  });

  const [filteroptions, setFilteroptions] = useState({
    category: [...props.data.categories],
    tags: [],
    min: "",
    max: "",
  });

  sortOnLoad(sortBy, request.posts);

  window.addEventListener("resize", () => {
    UpdateOnResize(setPagesize);
  });

  const applyToPost = (postid) => {
    axiosWithAuth()
      .post(
        `http://localhost:2019/freelancer/${props.data.freelancerid}/post/${postid}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axiosWithAuth()
      .get(
        `http://localhost:2019/customer/post/filter?category=${
          filteroptions.category
        }&tags=${""}&min=${filteroptions.min}&max=${
          filteroptions.max
        }&page=${0}&size=${pageSize}`
      )
      .then((res) => {
        setRequest({
          posts: res.data.content,
          loading: false,
          totalPages: res.data.totalPages,
        });
      })
      .catch((err) => console.log(err.res));
  }, [pageSize]);

  if (request.posts.length) {
    return (
      <div className="jobBoard">
        <Header />
        <ToolBar
          sortby={sortBy}
          setSortby={setSortBy}
          totaljobs={request.posts.length}
          filteroptions={filteroptions}
          setFilteroptions={setFilteroptions}
          setView={setView}
          view={view}
        />
        <Jobs jobs={request.posts} />
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
};

{
  {
    {
      /* <Pagination setPage={setPage} page={page} /> */
    }
    /* <JobSideBar applyToPost={applyToPost} data={PanelData} /> */
  }
  /* <Pagination totalPages={totalPages} /> */
}
