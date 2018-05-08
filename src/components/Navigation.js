import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
  render(){
    return (
      <div className="header">
        <nav className="navbar">
          <NavLink to="/">ABOUT</NavLink>
          <NavLink to="/web_development">WEB APPS</NavLink>
          <NavLink to="/art_design">ART + DESIGN</NavLink>
          <NavLink to="https://medium.com/@christinetran_81275" target="_blank">BLOG</NavLink>
        </nav>
      </div>
    )
  }
}

export default Navigation;
