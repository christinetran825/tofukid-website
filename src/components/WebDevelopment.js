import React, { Component } from 'react';

class WebDevelopment extends Component {
  render(){
    return (
      <div className="wrapper">
        <div className="web-dev">
          <h1>Web Development</h1>
          <div className="content">
            <p>What can I say, separating the designer from the developer is hard. While keeping up with my curiousity for human centered interactions, I craft products that delight people. When building things, I like to be product minded while keeping the end-user in mind. I see the technical details and end goal because people will use what I build. So, I treat all web development products as if they were interactive illustrative artworks.</p>
          </div>

          <section className="projects">
            <div className="project">
              <div className="details">
                <h2>SelfCare</h2>
                <p>Idea: There are a variety of habits that can affect mental health. From sleep to making sure medication was taken. Can we determine possible symptoms by tracking daily habits?</p>
                <p>Challenge: Build a mobile health app for users to track their daily habits for a symptom management system. At the moment, How can I apply React & Redux to build the User Profile? <span>Note: The daily entry tracking is a work in progress.</span></p>
                <button>GitHub</button>
                <button>YouTube</button>
              </div>
              <div className="video">
                <p>put video</p>
              </div>
            </div>

            <div className="project">
              <div className="details">
                <h2>Artphilia</h2>
                <p>Idea: There are plenty of artists (non-musicians) creating wonderful works of art. How can we keep a record of all the artists that we like?</p>
                <p>Challenge: Create an app where users can create a library of artists (non-musicians) they like.</p>
                <button>GitHub</button>
                <button>YouTube</button>
              </div>
              <div className="video">
                <p>put video</p>
              </div>
            </div>

            <div className="project">
              <div className="details">
                <h2>Tea Crate</h2>
                <p>Idea: There are tea drinkers, then there are tea collectors. From a single tea leaf, tea has evolved into various types, flavors, and cultural influence.</p>
                <p>Challenge: Design an app where a user can add a tea they've tried or want to try. <span>Side Challenge: Can we create a worldwide tea database?</span></p>
                <button>GitHub</button>
                <button>YouTube</button>
              </div>
              <div className="video">
                <p>put video</p>
              </div>
            </div>

            <div className="project">
              <div className="details">
                <h2>SeedPicker</h2>
                <p>Idea: I like vegetables. I chose a fun seed website to practice my CLI skills</p>
                <p>Challenge: Build a CLI Gem using Nokogiri.</p>
                <button>GitHub</button>
                <button>YouTube</button>
              </div>
              <div className="video">
                <p>put video</p>
              </div>
            </div>

          </section>
        </div>
      </div>
    )
  }
}



export default WebDevelopment;
