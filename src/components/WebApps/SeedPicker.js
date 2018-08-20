import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SeedPicker extends Component {
  render(){
    return (
      <div id="seedpicker" className="webapps">
        <div className="hero-image">
          <span><a href="/work">Back to Web Development</a></span>
        </div>

        <section className="webapp">
          <h3>SeedPicker</h3>
          <div className="specs">
            <p>My Role: Developer</p>
            <p>Platform: CLI Gem</p>
            <p>Languages & Frameworks: Ruby, Nokogiri</p>
            <p>Tools: CLI</p>
          </div>

          <div className="summary">
            <h2>Developing SeedPicker</h2>
            <p>I like vegetables. I chose a fun seed website to practice my CLI skills. Build a CLI Gem using Nokogiri and Ruby.</p>
            <ul>
              <li>
                <Link to="#" target="_blank">Testing</Link>
              </li>
              <li>
                <Link to="https://youtu.be/4QXM_g-vNr8" target="_blank">Walkthrough</Link></li>
              <li>
                <Link to="" target="_blank">Blog Post</Link></li>
              <li>
                <Link to="https://github.com/christinetran825/seed-picker-cli-app" target="_blank">GitHub</Link></li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}

export default SeedPicker;
