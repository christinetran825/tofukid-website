import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
  render(){
    return (
      <div className = 'navbar'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/web_development">Web Development</NavLink>
        <NavLink to="/bookmaking">Bookmaking</NavLink>
      </div>
    )
  }
}

export default Navigation;
