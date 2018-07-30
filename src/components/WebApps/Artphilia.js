import React, { Component } from 'react';

class Artphilia extends Component {
  render(){
    return (
      <section className="webapps">
        <span><a href="/work">Back to Web Development</a></span>
        <div className="webapp">
          <div className="title">
            <div className="project-name">
              <h3>Artphilia</h3>
            </div>
            <div className="links">
              <a href="https://github.com/christinetran825/Artphilia" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-lg fa-2x"></i></a>
              <a href="https://youtu.be/LW-DTvgwrGs" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube fa-lg fa-2x"></i></a>
            </div>
          </div>
          <div className="details">
            <h4>IDEA</h4>
            <p>There are plenty of artists (non-musicians) creating wonderful works of art. How can we keep a record of all the artists that we like?</p>
            <h4>CURRENT CHALLENGE</h4>
            <p>Create an app where users can create a library of artists (non-musicians) they like.</p>
          </div>
        </div>
      </section>
    )
  }
}

export default Artphilia;
