import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getproject } from "../actions/actions";

const SpecificProject = (props) => {
  let { id, itemid } = useParams();

  useEffect(() => {
    props.getproject(id, itemid);
  }, []);

  console.log(props.project);

  return (
    <div className='view2'>
      <p>{props.project.name}</p>
      <p>{props.project.background}</p>
      <p>{props.project.city}</p>
      <p>{props.project.description}</p>
      <p>{props.project.state}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fetching: state.isLoading,
    project: state.project,
  };
};

export default connect(mapStateToProps, { getproject })(SpecificProject);
