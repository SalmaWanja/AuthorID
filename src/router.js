import React, { Component } from "react";
import { Router, Switch, Redirect, Route } from "react-router-dom";
import AuthorID from "./views/authorID/authorID";
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory();

class AppRouter extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Switch>
          <Route component={AuthorID} exact path="/authorID" />
          <Redirect to="/authorID" />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
