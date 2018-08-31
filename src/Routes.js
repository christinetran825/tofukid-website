import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './containers/Homepage';
import Work from './containers/Work';
import Contact from './containers/Contact';
import ErrorPage from './containers/ErrorPage';
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
          <Route exact path="/" component={Homepage} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/work/web-dev/selfcare" component={SelfCare} />
          <Route exact path="/work/web-dev/artphilia" component={Artphilia} />
          <Route exact path="/work/web-dev/teacrate" component={TeaCrate} />
          <Route exact path="/work/web-dev/seedpicker" component={SeedPicker} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="*" component={ErrorPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Routes
