import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Artphilia extends Component {
  render(){
    return (
      <main id="artphilia" className="webapps">
        <div className="hero-image">
          <div className="hero-text">
            <h1>Artphilia</h1>
          </div>
        </div>

        <div classname="breadcrumbs">
          <span><a href="/work">Back to Web Development</a></span>
        </div>

        <section className="webapp">
          <div className="specs">
            <ul>
              <li>My Role: UX, UI, Branding, Developer</li>
              <li>Platform: Web App</li>
              <li>Languages & Frameworks: Ruby, Ruby on Rails, HTML, CSS, jQuery, Javascript</li>
              <li>Tools: Adobe XD, Google Draw</li>
            </ul>
            {/* <p>My Role: UX, UI, Branding, Developer</p>
            <p>Platform: Web App</p>
            <p>Languages & Frameworks: Ruby, Ruby on Rails, HTML, CSS, jQuery, Javascript</p>
            <p>Tools: Adobe XD, Google Draw</p> */}
          </div>
          <div className="summary">
            <h2>Developing Artphilia</h2>
            <p>Art can be found just about anywhere. Most art we, as a society, come across are through museums and art galleries. Though, not many artists are found in such places, many can be found at art fairs, convention centers, animations, and social media (like Instagram). As Artists continue to make and share their work, it’s hard to keep track of the ones we come across and like. I thought it’ll be a fun idea to build an app collecting artists (non-musicians) that we find and like; sort of like a rolodex. Users can also record artwork they like, own, or wish to own.</p>
            <p>Built as one of my Flatiron School projects, my primary goal was to develop an application. At the time, I managed the build with an app flow. As such, the app can be tested and reviewed at:</p>
              <ul>
                <li>
                  <Link to="https://artphilia.herokuapp.com/" target="_blank">Testing</Link>
                </li>
                <li>
                  <Link to="https://youtu.be/LW-DTvgwrGs" target="_blank">Walkthrough</Link></li>
                <li>
                  <Link to="https://medium.com/@christine_tran/portfolio-project-3-ruby-on-rails-artphilia-79f3e06cfdf2" target="_blank">Blog Post - Part 1</Link></li>
                <li>
                  <Link to="https://medium.com/@christine_tran/portfolio-project-4-ruby-on-rails-javascript-artphilia-c25a873dc5a" target="_blank">Blog Post - Part 2</Link></li>
                <li>
                  <Link to="https://github.com/christinetran825/Artphilia" target="_blank">GitHub</Link></li>
              </ul>
            <p>Below are my User Experience Design Process featuring Wireframing and Prototyping details.</p>
          </div>
        </section>

        <section className="details">
          <div className="goals">
            <h2>What is Artphilia</h2>
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
        </section>

        <section className="design-process">
          <h2>Sitemapping</h2>
          <div id="sitemap" className="visuals">
            <img src="../../images/web-dev/artphilia/artphilia-site-mapping.jpg" alt="artphilia-site-mapping"/>
          </div>

          <h2>Wireframes</h2>
          <div id="wireframes" className="visuals">
            <img src="../../images/web-dev/artphilia/wireframes/all-artists.jpg" alt="artphilia-all-artists-page"/>
            <img src="../../images/web-dev/artphilia/wireframes/artist-page.jpg" alt="artphilia-artists-page"/>
            <img src="../../images/web-dev/artphilia/wireframes/favorite-artists.jpg" alt="artphilia-favorite-artists-page"/>
            <img src="../../images/web-dev/artphilia/wireframes/artworks-owned.jpg" alt="artphilia-artworks-owned-page"/>
            <img src="../../images/web-dev/artphilia/wireframes/add-artist-form-modal.jpg" alt="artphilia-add-artists-form"/>
            <img src="../../images/web-dev/artphilia/wireframes/add-artwork-form-modal.jpg" alt="artphilia-add-artworks-form"/>
          </div>

          <h2>Prototypes</h2>
          <div id="prototypes" className="visuals">
            <img src="../../images/web-dev/artphilia/prototypes/artphilia-all-artists.jpg" alt="artphilia-all-artists-page"/>
            <img src="../../images/web-dev/artphilia/prototypes/artphilia-artist-page.jpg" alt="artphilia-artists-page"/>
            <img src="../../images/web-dev/artphilia/prototypes/artphilia-favorite-artists.jpg" alt="artphilia-favorite-artists-page"/>
            <img src="../../images/web-dev/artphilia/prototypes/artphilia-artworks-owned.jpg" alt="artphilia-artworks-owned-page"/>
            <img src="../../images/web-dev/artphilia/prototypes/artphilia-add-artist-form-modal.jpg" alt="artphilia-add-artists-form"/>
            <img src="../../images/web-dev/artphilia/prototypes/artphilia-add-artwork-form-modal.jpg" alt="artphilia-add-artworks-form"/>
          </div>
        </section>
      </main>
    )
  }
}

export default Artphilia;
