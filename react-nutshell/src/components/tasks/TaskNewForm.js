import React, { Component } from 'react';
import TaskManager from '../../modules/TaskManager';

class TaskForm extends Component {
    state = {
        task: "",
        date: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create task      object, invoke the taskManager post method, and redirect to the full task list
    */
    constructNewtask = evt => {
        evt.preventDefault();
        if (this.state.task === "" || this.state.date === "") {
            window.alert("Please input a task name and date");
        } else {
            this.setState({ loadingStatus: true });
            const task = {
                task: this.state.task,
                date: this.state.date,
                description: this.state.description
            };

            // Create the task and redirect user to task list
            TaskManager.post(task)
            .then(() => this.props.history.push("/tasks"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                    <label htmlFor="taskName">Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="task"
                        placeholder="task name"
                        />
                        <br></br>
                        <label htmlFor="date">Date</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="date"
                        placeholder="date"
                        />
                        <br></br>
                        <label htmlFor="Description">Description</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="description"
                        placeholder="description"
                        />
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewtask}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default TaskForm