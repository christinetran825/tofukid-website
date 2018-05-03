import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Bookmaking from './components/Bookmaking';
import Branding from './components/Branding';
import Navigation from './components/Navigation';
import WebDevelopment from './components/WebDevelopment';
import Illustrations from './components/Illustrations'
import Footer from './components/Footer';

import './App.css';

class Routes extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/bookmaking" component={Bookmaking} />
          <Route exact path="/branding" component={Branding} />
          <Route exact path="/web_development" component={WebDevelopment} />
          <Route exact path="/illustrations" component={Illustrations} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Routes
