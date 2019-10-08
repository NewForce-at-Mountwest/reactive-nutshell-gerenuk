import React, { Component } from 'react'
import Registration from "../auth/Registration"
import Login from '../auth/Login';
import "./Home.css"

class Home extends Component {
    render(){
        return(
            <div>
                    <div className ="logInButtons">
                    <Login/>
                    <br/>
                    <Registration/>
                    </div>
                <img src={require("./HomePageFrog.jpg")} alt="FrogPicture" className="frogPic"/>
            </div>
        )
    }
}

export default Home