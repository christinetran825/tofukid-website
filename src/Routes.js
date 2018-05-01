import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Bookmaking from './components/Bookmaking';
import Navigation from './components/Navigation';
import WebDevelopment from './components/WebDevelopment';
import Footer from './components/Footer';

import './App.css';

class Routes extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/bookmaking" component={Bookmaking} />
          <Route exact path="/web_development" component={WebDevelopment} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Routes
