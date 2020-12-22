import LandingPage from "./LandingPage";
import TermsAndServices from "./TermsAndServices"
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

export default function App() {
    return (
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <LandingPage />
              </Route>
              <Route path="/terms-conditions">
                <TermsAndServices />
              </Route>
            </Switch>
          </div>
        </Router>
      );
}