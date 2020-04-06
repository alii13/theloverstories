import React, { Component } from "react";
import Notification from "./Notification";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { Box } from "grommet";
import SimpleZoom from "./SimpleZoom";
import Button from "./Button";
//<ProjectList projects={projects} />

class Dashboard extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div>
        <div className="dashboard">
          <div className="row">
            <div
              className="col s12 m9"
              style={{ background: "lightblue", height: "100vh" }}
            >
              <div className="content">
                <ProjectList projects={projects} />
              </div>
            </div>
            <div
              className="col m3 hide-on-med-and-down"
              style={{ background: "blue", height: "100vh" }}
            ></div>
          </div>
          <Button />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    projects: state.project.projects
  };
};

export default connect(mapStateToProps)(Dashboard);
