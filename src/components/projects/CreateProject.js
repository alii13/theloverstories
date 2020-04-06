import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../store/actions/projectActions";
import LinearIndeterminate from "../feedback/LinearIndeterminate";
class CreateProject extends Component {
  state = {
    title: "",
    content: "",
    author: "",
    loading: false
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault(); //deafult behaviour prevention
    //console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        {this.state.loading ? <LinearIndeterminate /> : null}
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darker-3">Create Project</h5>
            <div className="input-field">
              <label htmlFor="author">Author</label>
              <input type="text" id="author" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="content"> Project Content</label>
              <textarea
                id="content"
                className="materialize-textarea"
                onChange={this.handleChange}
              ></textarea>
            </div>
            <div className="input-filed">
              <button className="btn pink lighten-1 z-depth-0">Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(null, mapDispatchToProps)(CreateProject);
