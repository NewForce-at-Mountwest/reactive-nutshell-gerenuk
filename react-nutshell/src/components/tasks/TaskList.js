

import React, { Component } from "react";
//import the components we will need
import TaskCard from "../tasks/TaskCard";
import TaskManager from "../../modules/TaskManager";



class TaskList extends Component {
  //define what this component needs to render
  state = {
    Tasks: []
  };

  deleteTaskProp = (id) => {
    TaskManager.delete(id)
      .then(TaskManager.getAll)
      .then(parsedTasks => {
          this.setState({
              tasks: parsedTasks
          })
      })
        }





  componentDidMount() {
    console.log("Task LIST: ComponentDidMount");
    //getAll from TaskManager and hang on to that data; put it in state
   TaskManager.getAll().then(TasksFromDatabase => {
      console.log(TasksFromDatabase);
      this.setState({
        Tasks: TasksFromDatabase
      });
    });
  }

  render() {
    console.log("Task LIST: Render");

    return (
      <>
        <section className="section-content">
          <button
            type="button"
            className="btn"
            onClick={() => {
              this.props.history.push("/tasks/new");
            }}
          >
            New Task?
          </button>
        </section>
        <div className="container-cards">
          {this.state.Tasks.map(singleTask => (
            <TaskCard key={singleTask.id} deleteTaskProp={this.deleteTaskProp} TaskProp={singleTask} />
          ))}
        </div>
      </>
    );
  }
}

export default TaskList;
