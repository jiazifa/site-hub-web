import React from "react";
import { Navigation } from "../../components";
import { Route } from "react-router-dom";
import { AllRoutes } from "../../routes";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>
        <div>
          <Route
            exact
            path="/app/sites"
            component={AllRoutes["SiteCollection"]}
          />
        </div>
      </div>
    );
  }
}

export { App };
