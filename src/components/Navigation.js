import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
  render(){
    return (
      <header>
        <nav>
          <NavLink to="/">Christine Tran</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="https://medium.com/@christine_tran" target="_blank">Blog</NavLink>
        </nav>
      </header>
    )
  }
}

export default Navigation;
