import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import { Campgrounds, CampgroundDetail } from "./pages";

// components
import { Navbar } from "./components";

// styles
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/campgrounds" component={Campgrounds}></Route>
        <Route
          exact
          path="/campgrounds/:id"
          component={CampgroundDetail}
        ></Route>
      </Switch>
    </Router>
  );
};

export default App;
