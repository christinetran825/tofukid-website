import React, { Component } from 'react';

class WebApps extends Component {
  render(){
    return (
      <section className="webapps">
        <div className="webapp">
          <div className="title">
            <div className="project-name">
              <h3>SelfCare</h3>
            </div>
            <div className="links">
              <a href="https://github.com/christinetran825/SelfCare-C" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-lg fa-2x"></i></a>
              <a href="https://youtu.be/6Py4HcsAqNQ" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube fa-lg fa-2x"></i></a>
            </div>
          </div>
          <div className="details">
            <h4>Idea</h4>
            <p>There are a variety of habits that can affect mental health. From sleep to making sure medication was taken. Can we determine possible symptoms by tracking daily habits?</p>
            <h4>Current Challenge</h4>
            <p>How can I apply React & Redux to build the User Profile?</p>
            <h4>End Goal</h4>
            <p>Build a mobile health app for users to track their daily habits for a symptom management system.</p>
            <p className="notes">NoteThe daily entry tracking is a work in progress.</p>
          </div>
        </div>

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
            <h4>Idea</h4>
            <p>There are plenty of artists (non-musicians) creating wonderful works of art. How can we keep a record of all the artists that we like?</p>
            <h4>Challenge</h4>
            <p>Create an app where users can create a library of artists (non-musicians) they like.</p>
          </div>
        </div>

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
            <h4>Idea</h4>
            <p>There are tea drinkers, then there are tea collectors. From a single tea leaf, tea has evolved into various types, flavors, and cultural influence.</p>
            <h4>Current Challenge</h4>
            <p>Design an app where a user can add teas they've tried or will try.</p>
            <h4>End Goal</h4>
            <p>Can we create a worldwide tea database?</p>
          </div>
        </div>

        <div className="webapp">
          <div className="title">
            <div className="project-name">
              <h3>SeedPicker</h3>
            </div>
            <div className="links">
              <a href="https://github.com/christinetran825/seed-picker-cli-app" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-lg fa-2x"></i></a>
              <a href="https://youtu.be/4QXM_g-vNr8" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube fa-lg fa-2x"></i></a>
            </div>
          </div>
          <div className="details">
            <h4>Idea</h4>
            <p>I like vegetables. I chose a fun seed website to practice my CLI skills.</p>
            <h4>Challenge</h4>
            <p>Build a CLI Gem using Nokogiri and Ruby.</p>
          </div>
        </div>
      </section>
    )
  }
}

export default WebApps;
