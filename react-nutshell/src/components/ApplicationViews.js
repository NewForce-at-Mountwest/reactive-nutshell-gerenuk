import { Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
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
                    return <Home {...this.props}/>;
                  }}
                />
               <Route
                  exact
                  path="/auth"
                  render ={props =>{
                      return <RegistrationCard/>;
                  }} />
                  <Route
                  exact
                  path="/auth/LoginCard"
                  render ={props =>{
                      return <LoginCard {...props}/>;
                  }} />
                {/* -----------------This is the End Of the Login/Register Routes------------------ */}
                </React.Fragment>
            )}
        }

export default ApplicationViews