import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      click: false
    };
  }

  toggleMenuButton = (e) => {
    this.setState({
      click: true
    });
  }

  render(){
    return (
      <header id="masthead">
        <div className="masthead-wrapper">
          <NavLink to="/"><img id="logo" src="./images/zukan.png" alt="tea cup ninja"/></NavLink>
          <nav className="menu">
            <ul>
              <li><NavLink to="/work">Work</NavLink></li>
              <li><NavLink to="https://medium.com/@christine_tran" target="_blank">Blog</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <button className="burger" aria-expanded="false" aria-controls="menu-list" onClick={() => this.toggleMenuButton()}>
              <span className="open"><i className="fa fa-bars" aria-hidden="true"></i> Menu</span>
            </button>
            {this.state.click ?
              <div className="menu-dropdown">
                <p><NavLink to="/work">Work</NavLink></p>
                <p><NavLink to="https://medium.com/@christine_tran" target="_blank">Blog</NavLink></p>
                <p><NavLink to="/contact">Contact</NavLink></p>
              </div>
             : null
           }
          </nav>
        </div>
      </header>
    )
  }
}

export default Navigation;
