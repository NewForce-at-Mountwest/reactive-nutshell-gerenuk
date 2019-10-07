import React, { Component } from 'react'
//import the components we will need
import EventCard from './EventCard'
import EventManager from '../../modules/EventManager';


class EventList extends Component {
    //define what this component needs to render
    state = {
        events: [],
    };

deleteEvent = id => {
        EventManager.deleteEvent(id)
          .then(EventManager.getAllEvents)
          .then(parsedEvents => {
            this.setState({
              events: parsedEvents
            });
          });
        }
componentDidMount(){
    EventManager.getAllEvents()
    .then(eventsFromDatabase => {
        this.setState({
            events: eventsFromDatabase
        });
    });
}

render(){
    console.log("EventList: Render");

    return(
        <React.Fragment>
        <section className="section-content">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            this.props.history.push("/events/new");
          }}
        >
          Add New Event
        </button>
      </section>
      <div className="container-cards">
        {this.state.events.map(singleEvent =>
                    <EventCard
                    deleteEventProp={this.deleteEvent}
                    key={singleEvent.id}
                    eventProp={singleEvent}
                    {...this.props}
                  />
                )}
    </div>
      </React.Fragment>
    )}}






export default EventList