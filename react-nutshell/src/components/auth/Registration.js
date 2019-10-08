import React, { Component } from "react"
import { Link } from "react-router-dom";

// Register Button on the Home Page that routes to the Registraion card
class Registration extends Component {
    render() {
        return(
        <div>
          <Link to={`/auth`}><button className="btn btn-primary">Register</button></Link>
        </div>
        )}
}

export default Registration