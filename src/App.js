import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import { Campgrounds, CampgroundDetail, NewCampground } from "./pages";

// components
import { Navbar, Footer } from "./components";

// styles
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/campgrounds" component={Campgrounds}></Route>
        <Route exact path="/campgrounds/new" component={NewCampground}></Route>
        <Route path="/campgrounds/:id" component={CampgroundDetail}></Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
