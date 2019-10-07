import React, { Component } from "react"
import EventManager from "../../modules/EventManager";

class EventEditForm extends Component {
    //set the initial state
    state = {
      title: "",
      date: "",
      location:"",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingEvent = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedEvent = {
        id: this.props.match.params.eventId,
        title: this.state.title,
        date: this.state.date,
        location: this.state.location
      };

      EventManager.update(editedEvent)
      .then(() => this.props.history.push("/events"))
    }

    componentDidMount() {
      EventManager.getOneEvent(this.props.match.params.eventId)
      .then(event => {
          this.setState({
            title: event.title,
            date: event.date,
            location: event.location,
            loadingStatus: false,
          });
      });
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="title"
                value={this.state.title}
              />
              <label htmlFor="eventTitle">Title:</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="date"
                value={this.state.date}
              />
              <label htmlFor="last">Date:</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="location"
                value={this.state.location}
              />
              <label htmlFor="last">Location:</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingEvent}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default EventEditForm