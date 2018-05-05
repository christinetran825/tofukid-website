import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './containers/About';
import WebDevelopment from './containers/WebDevelopment';
import ArtDesign from './containers/ArtDesign';
import Footer from './components/Footer';
import './App.css';

class Routes extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navigation />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/web_development" component={WebDevelopment} />
          <Route exact path="/art_design" component={ArtDesign} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Routes
