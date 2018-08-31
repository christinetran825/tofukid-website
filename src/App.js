import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './containers/ScrollToTop';
import Routes from './Routes'
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Routes />
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
