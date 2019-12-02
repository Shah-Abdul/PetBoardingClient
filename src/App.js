import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainLayout from "./containers/MainLayout";
import About from "./components/About";
import BoardingPolicy from "./components/BoardingPolicy";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";

import "./App.scss";

const App = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about-us">
          <About />
        </Route>
        <Route exact path="/boarding-policy">
          <BoardingPolicy />
        </Route>
        <Route exact path="/contact-us">
          <ContactUs />
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);

export default App;
