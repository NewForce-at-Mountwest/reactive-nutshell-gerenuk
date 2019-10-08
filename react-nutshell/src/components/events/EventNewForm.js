import React, { Component } from 'react';
import './EventNewForm.css'
import { Link } from "react-router-dom";
import EventManager from '../../modules/EventManager';

class EventNewForm extends Component {
    state = {
        title: "",
        date: "",
        location:"",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewEvent = evt => {
        evt.preventDefault();
        if (this.state.title === " " || this.state.date === " " || this.state.location ===" ") {
            window.alert("Please input data");
        } else {
            this.setState({ loadingStatus: true });
            const event = {
                title: this.state.title,
                date : this.state.date,
                location: this.state.location,
            };

            EventManager.post(event)
            .then(() => this.props.history.push("/events"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="title"
                        placeholder="Title"
                        />
                        <label htmlFor="eventName">Title</label>
                        <br/>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="date"
                        placeholder="Date"
                        />
                        <label htmlFor="date">Date</label>
                        <br/>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="location"
                        placeholder="Location"
                        />
                        <label htmlFor="location">Location</label>
                    </div>
                    <div className="alignRight">
                        <Link to={`/events/EventList`}><button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewEvent}
                        >Submit</button></Link>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}
export default EventNewForm