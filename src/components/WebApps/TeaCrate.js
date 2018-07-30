import React, { Component } from 'react';

class TeaCrate extends Component {
  render(){
    return (
      <section className="webapps">
        <span><a href="/work">Back to Web Development</a></span>
        <div className="webapp">
          <div className="title">
            <div className="project-name">
              <h3>Tea Crate</h3>
            </div>
            <div className="links">
              <a href="https://github.com/christinetran825/tea-crate" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-lg fa-2x"></i></a>
              <a href="https://youtu.be/3LCFISldE2w" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube fa-lg fa-2x"></i></a>
            </div>
          </div>
          <div className="details">
            <h4>IDEA</h4>
            <p>There are tea drinkers, then there are tea collectors. From a single tea leaf, tea has evolved into various types, flavors, and cultural influence.</p>
            <h4>CURRENT CHALLENGE</h4>
            <p>Design an app where a user can add teas they've tried or will try.</p>
            <h4>END GOAL</h4>
            <p>Can we create a worldwide tea database?</p>
          </div>
        </div>
      </section>
    )
  }
}

export default TeaCrate;
