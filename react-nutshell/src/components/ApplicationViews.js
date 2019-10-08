import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";

// this is the start of the Tasks Imports
import TaskList from "./tasks/TaskList";
import TaskForm from "./tasks/TaskNewForm";
import TaskEditForm from "./tasks/TaskEditForm";
// this is the end of the Task imports

import Home from "./home/Home";
// imports for login
import RegistrationCard from "./auth/RegistrationCard";
import LoginCard from "./auth/LoginCard";
import NewsForm from "./news/NewsForm";
import NewsDetail from "./news/NewsDetail";
import NewsEditForm from "./news/NewsEditForm";
import NewsManager from "../modules/NewsManager";
import NewsList from "./news/NewsList";
import EventList from "./events/EventList";
import EventNewForm from "./events/EventNewForm";
import EventDetail from "./events/EventDetail";
import EventEditForm from "./events/EventEditForm";
import MessagesList from "./messages/MessagesList"
import MessagesManager from "../modules/MessagesManager"


class ApplicationViews extends Component {
  state = {
    news: [],
    messages:[],
    users:[],
  };
  isAuthenticated = () => localStorage.getItem("credentials") !== null;

  deleteNews = id => {
    return NewsManager.deleteNews(id).then(news =>
      this.setState({
        news: news
      })
    );
  };

  addNews = newsObject => {
    return NewsManager.addNews(newsObject)
      .then(() => NewsManager.getAll())
      .then(news =>
        this.setState({
          news: news
        })
      );
  };

  updateNews = editedNewsObject => {
    return NewsManager.updateNews(editedNewsObject)
      .then(() => NewsManager.getAll())
      .then(news =>
        this.setState({
          news: news
        })
      );
  };
  addMessage = messageObject =>
    MessagesManager.postMessage(messageObject)
      .then(() => MessagesManager.getAllMessages())
      .then(messages =>
        this.setState({
          messages: messages
        })
      // .then(MessagesManager.getAllMessages)
      );

  updateMessages = editedMessageObject => {
        return MessagesManager.put(editedMessageObject)
          .then(() => MessagesManager.getAllMessages())
          .then(messages => {
            this.setState({
              messages: messages
            });
          });
      };

  // }
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/news"
          render={props => {
            if (this.isAuthenticated()) {
              return <NewsList {...props} news={this.state.news} />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route
          path="/news/new"
          render={props => {
            if (this.isAuthenticated()) {
              return <NewsForm {...props} addNews={this.addNews} />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route
          exact
          path="/news/:newsId(\d+)"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <NewsDetail
                  {...props}
                  deleteNews={this.deleteNews}
                  news={this.state.news}
                />
              );
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route
          path="/news/:newsId(\d+)/edit"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <NewsEditForm
                  {...props}
                  updateNews={this.updateNews}
                  news={this.state.news}
                />
              );
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route
          exact
          path="/"
          render={props => {
            return <Home {...this.props} />;
          }}
        />
        <Route
          exact
          path="/auth"
          render={props => {
            return <RegistrationCard {...props} />;
          }}
        />
        <Route
          exact
          path="/auth/LoginCard"
          render={props => {
            return <LoginCard {...props} userId = {parseInt(props.match.params.userId)}/>;
          }}
        />
        <Route
        exact
          path="/events"
          render={props => {
              if(this.isAuthenticated()){
            return (<EventList
            {...props}
            events ={this.state.events}
            />
            );
          }else{
              return<Redirect to="/" />; }
          }}
        />
        <Route
        exact
          path="/events/new"
          render={props => {
            return <EventNewForm{...props} />;
          }}
        />
        <Route
          exact
          path="/events/:eventId(\d+)"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <EventDetail
                eventId={parseInt(props.match.params.eventId)}
                  {...props}

                />
              );
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route
          exact
          path="/events/:eventId(\d+)/edit"
          render={props => {
            return <EventEditForm {...props} />;
          }}
        />
        {/* this is the start of the tasks routes */}
        <Route
          exact
          path="/tasks"
          render={props => {
              if (this.isAuthenticated()){
            return (
            <TaskList {...props} />);
              }else{
                  return <Redirect to ="/" />;
              }
          }}
        />
        <Route
          path="/tasks/new"
          render={props => {
            return <TaskForm {...props} />;
          }}
        />
        <Route
          path="/tasks/:taskId(\d+)/edit"
          render={props => {
              
            return <TaskEditForm {...props} />;
          }}
        />
        <Route
          path="/messages"
          render={props => {
            if (this.isAuthenticated()) {
              return <MessagesList {...props} messages={this.state.messages} addMessage={this.addMessage} updateMessages={this.updateMessages}
               />;
            } else {
              return <Redirect to="/" />
            }
          }}
        />

        {/* this is the end of the routes for the tasks */}
      </React.Fragment>
    );
  }
}
export default ApplicationViews;
