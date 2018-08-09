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
            <div className="roles">
              <p>My Role: UX, UI, Branding, Developer</p>
              <p>Platform: Web App</p>
              <p>Languages & Frameworks: Ruby, Ruby on Rails, HTML, CSS, jQuery, Javascript</p>
              <p>Tools: Adobe XD, Google Draw</p>
            </div>
            <div className="summary">
              <h2>Creating Artphilia</h2>
              <p>Artphilia is a fictional company seeking to share independent artists we like, their work, and their story.</p>
            </div>
            <div className="problem">
              <h2>The Problem</h2>
              <h4>1. What kind of artists are we limiting this to?</h4>
              <p>There are many artists creating wonderful works of art. Many aren’t seen in museums or galleries. Most can be found at art fairs, convention events, or on social media like Instagram.</p>
            </div>
            <div className="solution">
              <h2>The Solution</h2>
              <p>Design an app allowing users to input an artist’s name, website/portfolio link, where they were discovered, rating, and notes. With the artist recorded, allow users to upload an image of the artwork they like, own, or wish to own.</p>
            </div>
            <div className="visuals">
              <h2>Sitemapping</h2>
              <img className="site-mapping" src="./images/web-dev/artphilia/artphilia-site-mapping.jpg" alt="artphilia-site-mapping"/>
              <h2>Wireframing</h2>
              <img className="wireframes" src="./images/web-dev/artphilia/all-artists.jpg" alt="artphilia-all-artists-page"/>
              <img className="wireframes" src="./images/web-dev/artphilia/artist-page.jpg" alt="artphilia-artists-page"/>
              <img className="wireframes" src="./images/web-dev/artphilia/favorite-artists.jpg" alt="artphilia-favorite-artists-page"/>
              <img className="wireframes" src="./images/web-dev/artphilia/artworks-owned.jpg" alt="artphilia-artworks-owned-page"/>
              <img className="forms" src="./images/web-dev/artphilia/add-artist-form-modal.jpg" alt="artphilia-add-artists-form"/>
              <img className="forms" src="./images/web-dev/artphilia/add-artwork-form-modal.jpg" alt="artphilia-add-artworks-form"/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Artphilia;
