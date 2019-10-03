import React, { Component } from 'react'
import Registration from "../auth/Registration"
import Login from '../auth/Login';

class Home extends Component {
    render(){
        return(
            <div>
                <fieldset>
                    <Login/>
                <Registration/>
                </fieldset>
            </div>
        )
    }
}

export default Home