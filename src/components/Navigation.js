import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
  render(){
    return (
      <header id="masthead">
        <div id="site-branding">
          <h1 class="site-title">
            <NavLink to="/" id="logo">Christine Tran</NavLink>
          </h1>
        </div>
        <nav className="menu">
          <ul>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/work">Work</NavLink></li>
            <li><NavLink to="https://medium.com/@christine_tran" target="_blank">Blog</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <button className="burger" aria-expanded="false" aria-controls="menu-list">
            <span className="open"><i className="fa fa-bars" aria-hidden="true"></i> Menu</span>
            <span className="close">x</span>
          </button>
        </nav>
      </header>
    )
  }
}

export default Navigation;
