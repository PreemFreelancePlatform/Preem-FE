import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getprojects } from "../actions/actions";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { ProjectList } from "./projectList";

const AllProjects = (props) => {
  useEffect(() => {
    props.getprojects()
  }, [])

  console.log(props.allProjects)

  return (
    <div className='view2'>
      {props.allProjects.map(item => {
      return <ProjectList data={item} key={item.id} />
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    fetching: state.isLoading,
    allProjects: state.allProjects,
  };
};

export default connect(mapStateToProps, { getprojects })(AllProjects);

