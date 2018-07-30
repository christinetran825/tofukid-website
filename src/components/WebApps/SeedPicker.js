import React, { Component } from 'react';

class SeedPicker extends Component {
  render(){
    return (
      <section className="webapps">
        <span><a href="/work">Back to Web Development</a></span>
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
            <h4>IDEA</h4>
            <p>I like vegetables. I chose a fun seed website to practice my CLI skills.</p>
            <h4>CURRENT CHALLENGE</h4>
            <p>Build a CLI Gem using Nokogiri and Ruby.</p>
          </div>
        </div>
      </section>
    )
  }
}

export default SeedPicker;
