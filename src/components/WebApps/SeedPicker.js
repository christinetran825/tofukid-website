import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SeedPicker extends Component {
  render(){
    return (
      <div id="seedpicker" className="webapps">
        <div className="hero-image">
          <div className="hero-text">
            <h1>Seed Picker</h1>
          </div>
        </div>

        <div classname="breadcrumbs">
          <span><Link to="/work">Back to Web Development</Link></span>
        </div>

        <section className="webapp">
          <div className="specs">
            <ul>
              <li>My Role: Developer</li>
              <li>Platform: CLI Gem</li>
              <li>Languages & Frameworks: Ruby, CLI, Nokogiri</li>
              <li>Tools: CLI</li>
            </ul>
          </div>
          <div className="summary">
            <h2>Developing Seed Picker</h2>
            <p>When I first learned how to code, I started with the basics - HTML and CSS. I wasn’t aware of any language beyond those two. And so, I made it a goal to learn new languages and functionalities of web design. This eventually lead me towards a Full-Stack program with Flatiron.</p>
            <p>Built as one of my Flatiron School projects, my primary goal was to develop a Ruby Gem. The gem provides a Command Line Interface (CLI) to an external data source through the use of Nokogiri. The CLI is composed entirely as an Object Oriented Ruby application. We’re essentially stripping the entire external data source down to its data. No imagery, no color, no styles. Just simple text and numbers. And Nokogiri is perfect for this job.</p>
            <p>The app can be tested and reviewed at:</p>
              <ul>
                <li>
                  <Link to="https://youtu.be/LW-DTvgwrGs" target="_blank">Walkthrough</Link></li>
                <li>
                  <Link to="https://medium.com/@christinetran_81275/portfolio-project-1-cli-gem-seedpicker-d3619c62d01f" target="_blank">Blog Post</Link></li>
                <li>
                  <Link to="https://github.com/christinetran825/Artphilia" target="_blank">GitHub </Link></li>
              </ul>

            <section className="design-process">
              <h2>Data Source</h2>
              <p>The external data source I chose was <Link to="https://www.rareseeds.com/" target="_blank">Baker Creek Heirloom Seeds Rare Seeds</Link>. I thought a seed catalogue would be a great way to play with data and learn Object Oriented Ruby.</p>

              <h2>Sitemapping</h2>
              <p>With the gem, I chose to include only the company’s vegetable seeds catalogue due to time. To prepare the gem, I first reviewed the catalogues’ site mapping to determine patterns. I was seeking patterns in how a user can click on a parent seed and find the seed they’re looking for, with its details and price. Here’s the pattern of the site mapping:</p>

              <div id="sitemap" className="visuals">
                <img src="../../images/web-dev/seed-picker/seed-picker-site-mapping.jpg" alt="seedpicker-site-mapping"/>
              </div>

              <h2>User Journey</h2>
              <p>From inspecting the web pages, I’ve noted two user journey design patterns.</p>

              <div id="journey" className="visuals">
                <img src="../../images/web-dev/seed-picker/seed-picker-user-journey-a.jpg" alt="seedpicker-user-journey-a"/>
                <img src="../../images/web-dev/seed-picker/seed-picker-user-journey-b.jpg" alt="seedpicker-user-journey-b"/>
              </div>

              <h2>Scraping</h2>
              <p>The pattern worked for most of the parent seeds, however, I did come across rare breaks in the pattern to some seeds because of its HTML. Due to that, I had to accommodate a specific Nokogiri scrape for those rare seeds.</p>

              <div id="scrapping" className="visuals">
                <img src="../../images/web-dev/seed-picker/seed-picker-scraping-structure.jpg" alt="seedpicker-scraping-structure"/>
              </div>
            </section>

            <section className="solution">
              <h2>CLI Images</h2>
              <div id="CLI" className="visuals">
                <img src="../../images/web-dev/seed-picker/cli-1.png" alt="seedpicker-cli-1"/>
                <img src="../../images/web-dev/seed-picker/cli-4.png" alt="seedpicker-cli-4"/>
              </div>
            </section>

          </div>
        </section>
      </div>
    )
  }
}

export default SeedPicker;
