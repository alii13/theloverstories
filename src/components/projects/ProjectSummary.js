import React from "react";
const ProjectSummary = ({ project }) => {
  console.log(project);
  return (
    <div className="col s12 m12">
      <div className="card horizontal">
        <div className="card-image">
          <div className="containerx">
            <img src="https://materializecss.com/images/sample-1.jpg" />
          </div>
        </div>

        <div className="card-stacked">
          <div className="card-content">
            <p>{project.content}</p>
          </div>
          <div className="card-action">
            <a href="/create">This is a link</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectSummary;
