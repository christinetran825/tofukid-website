import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
  render(){
    return (
      <div className='navbar'>
        <NavLink to="/">About</NavLink>
        <NavLink to="/web_development">Web Development</NavLink>
        <NavLink to="/art_design">Art + Design</NavLink>
        <NavLink to="https://medium.com/@christinetran_81275" target="_blank">Blog</NavLink>
      </div>
    )
  }
}

export default Navigation;
