import React, { Component } from "react";
import TaskManager from "../../modules/TaskManager";


class TaskEditForm extends Component {
  //set the initial state
  state = {
    taskName: "",
    date: "",
    description: "",
    loadingStatus: true,
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingTask = evt => {
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    const editedTask = {
      id: this.props.match.params.taskId,
      task: this.state.taskName,
      date: this.state.date,
      description: this.state.description,
    };
    console.log("edited task", editedTask)

    TaskManager.update(editedTask).then(() =>
      this.props.history.push("/tasks")
    );
  };

  componentDidMount() {
    TaskManager.getOne(this.props.match.params.taskId).then(task => {
        this.setState({
          taskName: task.task,
          date: task.date,
          description: task.description,
          loadingStatus: false,
        });
    })}
    ;

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <label htmlFor="taskName">Task name</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="taskName"
                value={this.state.taskName}
              />
<br></br>
              <label htmlFor="date">date</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="date"
                value={this.state.date}
              />
              <br>
              </br>
              <label htmlFor="description">description</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="description"
                value={this.state.description}
              />
              <br>
              </br>
            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.updateExistingTask}
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
};

export default TaskEditForm;