import React from "react";
import { AllRoutes } from "../routes";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "normalize.css";
import "bulma";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={AllRoutes["LeadingPage"]} />
          <Route path="/app" component={AllRoutes["Main"]} />
          <Route path="/aboutme" component={AllRoutes["AboutMe"]} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
