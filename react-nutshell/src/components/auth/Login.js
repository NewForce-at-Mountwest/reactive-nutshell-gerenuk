import React, { Component } from "react"
import { Link } from "react-router-dom";

// Lgin Button on the Home Page to route to the Login Card
class Login extends Component {
    render() {
        return(
        <div>
          <Link to={`/auth/LoginCard`}><button className="btn btn-success">Sign in</button></Link>
        </div>
        )}
}

export default Login