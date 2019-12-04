import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./components/About";
import BoardingPolicy from "./components/BoardingPolicy";
import ContactUs from "./components/ContactUs";
import Gallery from './components/Gallery';
import Home from "./components/Home";
import MainLayout from "./containers/MainLayout";

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
        <Route exact path="/gallery">
          <Gallery />
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);

export default App;
