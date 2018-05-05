import React, { Component } from 'react';

class WebDevelopment extends Component {
  render(){
    return (
      <div className="container">
        <div className="web-dev">
          <h1>Web Development</h1>
          <p>Crafting products that delight people is fun. When building things, I like to be product minded while keeping the end-user in mind. I see the technical details and end goal because people will use what I build. So, I treat all web development products as if they were interactive illustrative artworks.</p>
        </div>

        <section className="projects">
          <div className="project">
            <div className="title">
              <h3>SelfCare</h3>
              <span className="fa-stack fa-lg fa-2x"><a href="https://github.com/christinetran825/SelfCare-C" target="_blank"><i className="fa fa-github"></i></a></span>
              <span className="fa-stack fa-lg fa-2x"><a href="https://youtu.be/6Py4HcsAqNQ" target="_blank"><i className="fa fa-youtube"></i></a></span>
            </div>
            <div className="details">
              <p><strong>Idea -</strong> There are a variety of habits that can affect mental health. From sleep to making sure medication was taken. Can we determine possible symptoms by tracking daily habits?</p>
              <p><strong>Current Challenge -</strong> How can I apply React & Redux to build the User Profile?</p>
              <p><strong>Major Challenge -</strong> Build a mobile health app for users to track their daily habits for a symptom management system.</p>
              <p className="notes">Note - The daily entry tracking is a work in progress.</p>
            </div>
          </div>

          <div className="project">
            <div className="title">
              <h3>Artphilia</h3>
              <span className="fa-stack fa-lg fa-2x"><a href="https://github.com/christinetran825/Artphilia" target="_blank"><i className="fa fa-github"></i></a></span>
              <span className="fa-stack fa-lg fa-2x"><a href="https://youtu.be/LW-DTvgwrGs" target="_blank"><i className="fa fa-youtube"></i></a></span>
            </div>
            <div className="details">
              <p><strong>Idea -</strong> There are plenty of artists (non-musicians) creating wonderful works of art. How can we keep a record of all the artists that we like?</p>
              <p><strong>Challenge -</strong> Create an app where users can create a library of artists (non-musicians) they like.</p>
            </div>
          </div>

          <div className="project">
            <div className="title">
              <h3>Tea Crate</h3>
              <span className="fa-stack fa-lg fa-2x"><a href="https://github.com/christinetran825/tea-crate" target="_blank"><i className="fa fa-github"></i></a></span>
              <span className="fa-stack fa-lg fa-2x"><a href="https://youtu.be/3LCFISldE2w" target="_blank"><i className="fa fa-youtube"></i></a></span>
            </div>
            <div className="details">
              <p><strong>Idea -</strong> There are tea drinkers, then there are tea collectors. From a single tea leaf, tea has evolved into various types, flavors, and cultural influence.</p>
              <p><strong>Challenge -</strong> Design an app where a user can add teas they've tried or will try.</p>
              <p><strong>Side Challenge -</strong> Can we create a worldwide tea database?</p>
            </div>
          </div>

          <div className="project">
            <div className="title">
              <h3>SeedPicker</h3>
              <span className="fa-stack fa-lg fa-2x"><a href="https://github.com/christinetran825/seed-picker-cli-app" target="_blank"><i className="fa fa-github"></i></a></span>
              <span className="fa-stack fa-lg fa-2x"><a href="https://youtu.be/4QXM_g-vNr8" target="_blank"><i className="fa fa-youtube"></i></a></span>
            </div>
            <div className="details">
              <p><strong>Idea -</strong> I like vegetables. I chose a fun seed website to practice my CLI skills.</p>
              <p><strong>Challenge -</strong> Build a CLI Gem using Nokogiri and Ruby.</p>
            </div>
          </div>

        </section>
      </div>
    )
  }
}



export default WebDevelopment;
