import React, { Component } from "react";
import { Router, Switch, Redirect, Route } from "react-router-dom";
import AuthorID from "./views/authorID/authorID";
import { createBrowserHistory } from "history";
import Results from "./views/authorID/results";

const browserHistory = createBrowserHistory();

class AppRouter extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Switch>
          <Route component={AuthorID} exact path="/home" />
          <Route component={Results} exact path='/results' />
          <Route exact pathe="/">
            <Redirect to="/home"></Redirect>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
