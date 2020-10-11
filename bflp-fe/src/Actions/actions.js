import { axiosWithAuth } from "../Utils/axiosWIthAuth";


export const FetchProjects = (id) => dispatch => {
  dispatch ({ type: "GETPROJ" });
  axiosWithAuth()
  .get(`/api/applicant/${id}/projects`)
  .then(res => {
    console.log(res.data);
    dispatch({ type: "SUCCESS", payload: res.data });
  })
  .catch((err) => console.log(err.response));
};


export const getprojects = () => dispatch => {
  dispatch ({ type: "GETALLPROJECTS" });
  axiosWithAuth()
    .get(`/api/applicant/projects`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: "SUCCESSALL", payload: res.data });
    })
    .catch(err => console.error(err.response));
};

export const getproject = (id, projectid) => dispatch => {
  dispatch ({ type: "GETPROJECT" });
  axiosWithAuth()
    .get(`/api/applicant/${id}/project/${projectid}`)
    .then(res => {
      dispatch({ type: "SUCCESSONE", payload: res.data });
    })
    .catch(err => console.error(err));
};





