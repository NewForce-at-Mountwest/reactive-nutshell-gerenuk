import React, { Component } from "react";
import EventManager from "../../modules/EventManager";



class EventDetail extends Component {
  state = {
    title: "",
    date: "",
    location:"",
    eventArray: [],
    loadingStatus: true
  };

  handleDelete = () => {
    this.setState({ loadingStatus: true });
    EventManager.deleteEvent(this.props.eventId)
    .then(() =>
      this.props.history.push("/events")
    );
  };

  componentDidMount() {
    EventManager.getAllEvents();
    EventManager.getOneEvent(this.props.eventId).then(event => {
      this.setState({
        title: event.title,
        date: event.date,
        location: event.location,
        loadingStatus: false
      });
    });
  }
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            <span style={{ color: "darkslategrey" }}>
              {this.state.title}
            </span>
          </h3>
          <p><span>{this.state.date}</span></p>
          <p><span>{this.state.location}</span></p>
          <button
            type="button"
            className ="btn btn-danger"
            disabled={this.state.loadingStatus}
            onClick={this.handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default EventDetail;
