import React, { Component } from "react"

class LoginCard extends Component {

  // Set initial state
  state = {
    name: "",
    password: "",
  }

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleLogin = (e) => {
    e.preventDefault()
    /*
        For now, just store the email and password that
        the customer enters into local storage.
    */
    localStorage.setItem(
        "credentials",
        JSON.stringify({
            name: this.state.name,
            password: this.state.password
        })
    )
    this.props.history.push("/home");

  }

//    Text inputs to enter log in information
  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <fieldset>
            <h3>Please sign in</h3>
            <div className="formgrid">
                <input onChange={this.handleFieldChange} type="name"
                    id="name"
                    placeholder="Username"
                    required="" autoFocus="" />
                <label htmlFor="inputName">Username</label>
                 <br/>
                <input onChange={this.handleFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required="" />
                <label htmlFor="inputPassword">Password</label>
            </div>
            <button type="submit">
                Sign in
            </button>
        </fieldset>
      </form>
    )
  }

}

export default LoginCard