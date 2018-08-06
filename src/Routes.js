import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './containers/About';
import Work from './containers/Work';
import SelfCare from './components/WebApps/SelfCare';
import Artphilia from './components/WebApps/Artphilia';
import TeaCrate from './components/WebApps/TeaCrate';
import SeedPicker from './components/WebApps/SeedPicker';
import Footer from './components/Footer';
import './App.css';

class Routes extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Work} />
          <Route exact path="/about" component={about} />
          <Route exact path="/selfcare" component={SelfCare} />
          <Route exact path="/artphilia" component={Artphilia} />
          <Route exact path="/teacrate" component={TeaCrate} />
          <Route exact path="/seedpicker" component={SeedPicker} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Routes
