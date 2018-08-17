import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
  render(){
    return (
      <header>
        <nav className="menu">
          <NavLink to="/" id="logo">Christine Tran</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="https://medium.com/@christine_tran" target="_blank">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <button className="burger" aria-expanded="false" aria-controls="menu-list">
            <span className="open"><i className="fa fa-bars" aria-hidden="true"></i></span>
            <span className="close">x</span>
          </button>
        </nav>
      </header>
    )
  }
}

export default Navigation;
