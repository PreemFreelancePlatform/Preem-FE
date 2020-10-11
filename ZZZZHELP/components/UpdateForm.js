import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getproject } from "../actions/actions";
import { axiosWithAuth } from "../utils/axiosWIthAuth";
import { useHistory, Redirect } from "react-router-dom";

const UpdateForm = (props) => {
  let { id, itemid } = useParams();
  let history = useHistory();

  const [data, setData] = useState({
    name: "",
    description: "",
    background: "",
    city: "",
    state: "",
    image_url: "",
  });

  const handleChanges = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  console.log(data);

  useEffect(() => {
    props.getproject(id, itemid);
  }, []);

  console.log(props.project);

  const handleDelete = (e) => {
    axiosWithAuth()
      .delete(`/api/applicant/${id}/project/${itemid}`)
      .then((res) => {
        console.log(res);
        history.push(`/applicant/${id}`);
      })
      .catch((err) => console.log(err.response.data));
  };

  const submit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/api/applicant/${id}/project/${itemid}`, data)
      .then((res) => {
        console.log(res);
        history.push(`/applicant/${id}`);
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <div className="cont1">
      <div className="newproj">
        <form onSubmit={submit}>
          <input
            type="text"
            className="f3"
            value={data.name}
            name="name"
            placeholder={props.project.name}
            onChange={handleChanges}
          />
          <input
            type="text"
            className="f3"
            value={data.description}
            name="description"
            placeholder={props.project.description}
            onChange={handleChanges}
          />
          <input
            type="text"
            className="f3"
            value={data.background}
            name="background"
            placeholder={props.project.background}
            onChange={handleChanges}
          />
          <input
            type="text"
            className="f3"
            value={data.city}
            name="city"
            placeholder={props.project.city}
            onChange={handleChanges}
          />
          <input
            type="text"
            className="f3"
            value={data.state}
            name="state"
            placeholder={props.project.state}
            onChange={handleChanges}
          />
          <input
            type="text"
            className="f3"
            value={data.image_url}
            name="image_url"
            placeholder="image_url"
            onChange={handleChanges}
          />
          <div className='cont1'>
          <button className="button2" type="submit">
            update Project
          </button>
          <button onClick={handleDelete} className="button2" type="submit">
            delete 
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fetching: state.isLoading,
    project: state.project,
  };
};

export default connect(mapStateToProps, { getproject })(UpdateForm);
