import React, { Component } from "react";
import { Link } from "react-router-dom";

class TaskCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            Task:
            <br />
            <span>{this.props.TaskProp.task}</span>
            <br />
            <span>{this.props.TaskProp.date}</span>
            <br />
            <span>{this.props.TaskProp.description}</span>
          </h3>
          <Link to={`/tasks/${this.props.TaskProp.id}/edit`}>
            <button onClick={() => this.props.editTask}>Edit Task!</button>
          </Link>

          <button
            onClick={() => this.props.deleteTaskProp(this.props.TaskProp.id)}
          >
            Delete Task!
          </button>
        </div>
      </div>
    );
  }
}

export default TaskCard;
