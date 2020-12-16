import React from "react";
import ReactDOM from "react-dom";
import Main, { RedirectComponent } from "./Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/recruitments2020" component={Main} />
        <Route path="*" component={RedirectComponent} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("main")
);
