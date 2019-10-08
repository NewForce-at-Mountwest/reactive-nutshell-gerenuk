import React, { Component } from "react"
import UserManager from "../../modules/UserManager";

class LoginCard extends Component {

  // Set initial state
  state = {
    name: "",
    password: "",
    userId:""
  }

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }


  handleLogin = (e) => {
    e.preventDefault()

  const nameValue = this.state.name;
  const passwordValue = this.state.password;

  UserManager.getOneUserName(nameValue)
  .then(user =>{
      console.log(passwordValue)
   if(user[0].password === passwordValue){
    localStorage.setItem(
        "credentials",
        JSON.stringify(
            user[0].id
        ))}
    else {
        window.alert("Incorrect Information");
    }
    this.props.history.push("/");
  })
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