import { Route } from 'react-router-dom'
import React, { Component } from 'react'

// this is the start of the Tasks Imports
import TaskList from './tasks/TaskList'
import TaskForm from './tasks/TaskNewForm'
// this is the end of the Task imports



class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/tasks"
        render={props =>{
            return <TaskList {...props}/>
         }} />
            <Route path="/tasks/new" render={(props) => {
                return <TaskForm {...props} />
              }} />
      </React.Fragment>

    )
  }
}

export default ApplicationViews