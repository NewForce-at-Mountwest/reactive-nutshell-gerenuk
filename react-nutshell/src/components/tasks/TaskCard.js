import React, { Component } from "react";
import { Link } from "react-router-dom";

class TaskCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h3 class="card-body">
            Task:
            <br />
            <span>{this.props.TaskProp.task}</span>
            <br />
            <span>{this.props.TaskProp.date}</span>
            <br />
            <span>{this.props.TaskProp.description}</span>
          </h3>
          <Link to={`/tasks/${this.props.TaskProp.id}/edit`}>
            <button className="btn btn-success" onClick={() => this.props.editTask}>Edit Task!</button>
          </Link>

        <Link to="/tasks" refresh ="true">
          <button type="checkbox" className ="btn btn-danger"
            onClick={() => this.props.deleteTaskProp(this.props.TaskProp.id)}
          >
            Delete Task!
          </button>
          </Link>

        </div>
      </div>
    );
  }
}

export default TaskCard;
