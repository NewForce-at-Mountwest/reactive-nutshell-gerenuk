import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";

import NewsForm from "./news/NewsForm";
import NewsDetail from "./news/NewsDetail";
import NewsEditForm from "./news/NewsEditForm";
import newsManager from "../modules/newsManager"
import NewsList from "./news/NewsList"
class ApplicationViews extends Component {
    state={
        news:[]
    };
    isAuthenticated = () => localStorage.getItem("credentials") !== null;

    deleteNews = id => {
        return newsManager.deleteNews(id).then(news =>
          this.setState({
            news: news
          })
        );
      }

      addNews = newsObject => {
        return newsManager.addNews(newsObject)
          .then(() => newsManager.getAll())
          .then(news =>
            this.setState({
              news: news
            })
          );
      }

      updateNews = editedNewsObject => {
        return newsManager.updateNews(editedNewsObject)
          .then(() => newsManager.getAll())
          .then(news =>
            this.setState({
              news: news
            }))
      }


    // }
    render() {
      return (
        <React.Fragment>
          <Route
          exact
          path="/news"
          render={props => {
            if (this.isAuthenticated()) {
              return <NewsList {...props} news={this.state.news} />
            } else {
              return <Redirect to="/" />
            }
          }}
        />
        <Route
          path="/news/new"
          render={props => {
            if (this.isAuthenticated()) {
              return <NewsForm {...props} addNews={this.addNews} />
            } else {
              return <Redirect to="/" />
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
              )
            } else {
              return <Redirect to="/" />
            }
          }}
        />
        <Route
          path="/news/:newsId(\d+)/edit"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <NewsEditForm {...props}
                  updateNews={this.updateNews}
                  news={this.state.news}
                />
              )
            } else {
              return <Redirect to="/" />
            }
          }}
        />
        </React.Fragment>
      );
    }
  }

  export default ApplicationViews;