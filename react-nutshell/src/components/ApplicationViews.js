import { Route } from "react-router-dom";
import React, { Component } from "react";

// this is the start of the Tasks Imports
import TaskList from "./tasks/TaskList";
import TaskForm from "./tasks/TaskNewForm";
import TaskEditForm from './tasks/TaskEditForm'
// this is the end of the Task imports

import Home from "./home/Home";
// imports for login
import RegistrationCard from "./auth/RegistrationCard";
import LoginCard from "./auth/LoginCard";

class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        {/* -----------------This is the Start Of the Login/Register Routes------------------ */}
        <Route
          exact
          path="/home"
          render={props => {
            return <Home {...this.props} />;
          }}
        />
        <Route
          exact
          path="/auth"
          render={props => {
            return <RegistrationCard {...props} />;
          }}
        />
        <Route
          exact
          path="/auth/LoginCard"
          render={props => {
            return <LoginCard {...props} />;
          }}
        />
        {/* -----------------This is the End Of the Login/Register Routes------------------ */}
        {/* this is the start of the tasks routes */}
        <Route
          exact
          path="/tasks"
          render={props => {
            return <TaskList {...props} />;
          }}
        />
        <Route
          path="/tasks/new"
          render={props => {
            return <TaskForm {...props} />;
          }}
        />
        <Route
          path="/tasks/:taskId(\d+)/edit"
          render={props => {
            return <TaskEditForm {...props} />;
          }}
        />

        {/* this is the end of the routes for the tasks */}
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
