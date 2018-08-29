import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showMenu: false
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu = (e) => {
    this.setState({
      showMenu: true
    }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu = () => {
    this.setState({
      showMenu: false
    }, () => {
      document.removeEventListener('click', this.closeMenu);
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
             {this.state.showMenu ?
               <div className="menu-dropdown">
                 <span>x</span>
                 <p><NavLink to="/work">Work</NavLink></p>
                 <p><NavLink to="https://medium.com/@christine_tran" target="_blank">Blog</NavLink></p>
                 <p><NavLink to="/contact">Contact</NavLink></p>
               </div>
              :
              <button className="burger"
                aria-expanded="false"
                aria-controls="menu-list"
                onClick={() => this.showMenu()}>
                <span className="open">
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </span>
              </button>
              }
          </nav>
        </div>
      </header>
    )
  }
}

export default Navigation;
