import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getproject } from "../actions/actions";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";



const Projects = (props) => {
  const { id, projectid } = useParams();
  let history = useHistory()

  return (
    <div className='view'>
      <p>{props.data.name}</p>
      <p>{props.data.description}</p>
      <p>{props.data.background}</p>
      <p>{props.data.city}</p>
      <p>{props.data.state}</p>
      <div className='buttons'>
      <button className='button2' onClick={() => history.push(`/user/${id}/project/${props.data.id}`)}>edit</button>
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

export default connect(mapStateToProps, { getproject })(Projects);
