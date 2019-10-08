import React, { Component } from 'react';
import { Link } from "react-router-dom";

class EventCard extends Component {
state ={
    count:0
}

likeIncrements= ()=>{
    let newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
    return newCount
}

    render () {
        return (
            <div className= "card-container">
                <div className= "card-content">
                    <h3>Title:{" "}
                        <span className ="card-events">{this.props.eventProp.title}</span>
                    </h3>
                    <p>Date:{" "}<span className= "card-events">{this.props.eventProp.date}</span></p>
                    <p>Location:{" "} <span className= "card-location">{this.props.eventProp.location}</span></p>
                    <Link to={`/events/${this.props.eventProp.id}`}><button className="btn btn-dark">Details</button></Link>
                    <button type="button" className ="btn btn-primary"
                    onClick={() => {this.props.history.push(`/events/${this.props.eventProp.id}/edit`)}}>Edit</button>
                    <br/>
                    <button onClick ={this.likeIncrements} className="btn btn-secondary" >{this.state.count} Likes</button>
                </div>
                </div>
        )
    }
}

export default EventCard