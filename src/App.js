import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}

export default App;

// <div className="App">
//   <header className="App-header">
//     <h1 className="App-title">Welcome to React</h1>
//   </header>
//   <p className="App-intro">
//     To get started, edit <code>src/App.js</code> and save to reload.
//   </p>
// </div>
