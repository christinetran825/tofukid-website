import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SeedPicker extends Component {
  render(){
    return (
      <main id="seedpicker" className="webapps">
        <div className="hero-image">
          <div className="hero-text">
            <h1>Seed Picker</h1>
          </div>
        </div>

        <div className="breadcrumbs">
          <span><Link to="/work">Back to Web Development</Link></span>
        </div>

        <section className="item intro">
          <h1 className="title">Seed Picker</h1>
          <div className="specs">
            <p><span>My Role:</span> Developer</p>
            <p><span>Platform:</span> CLI Gem</p>
            <p><span>Languages & Frameworks:</span> Ruby, CLI, Nokogiri</p>
            <p><span>Tools:</span> CLI</p>
          </div>
          <article className="summary">
            <p>When I first learned how to code, I started with the basics - HTML and CSS. I wasn’t aware of any language beyond those two. And so, I made it a goal to learn new languages and functionalities of web design. This eventually lead me towards a Full-Stack program with Flatiron.</p>
            <p>Built as one of my Flatiron School projects, my primary goal was to develop a Ruby Gem. The gem provides a Command Line Interface (CLI) to an external data source through the use of Nokogiri. The CLI is composed entirely as an Object Oriented Ruby application. We’re essentially stripping the entire external data source down to its data. No imagery, no color, no styles. Just simple text and numbers. And Nokogiri was perfect for this job.</p>
          </article>
        </section>

        <section className="item details">
          <article className="goals">
            <div className="project-links">
              <Link to="https://youtu.be/LW-DTvgwrGs" target="_blank">Walkthrough</Link>

              <Link to="https://medium.com/@christinetran_81275/portfolio-project-1-cli-gem-seedpicker-d3619c62d01f" target="_blank">Blog Post</Link>

              <Link to="https://github.com/christinetran825/Artphilia" target="_blank">GitHub </Link>
            </div>
          </article>
          <article className="problem">
            <h2 className="title">The Problem</h2>
            <article>
              <span>1. Lack of Cohesive HTML Structure</span>
              <p>The external data source I chose was <Link to="https://www.rareseeds.com/" target="_blank">Baker Creek Heirloom Seeds Rare Seeds</Link>. I thought a seed catalogue would be a great way to play with data and learn Object Oriented Ruby. The website's HTML structure wasn't cohesive. Some web pages should've had a templatized design as they followed a patterned.</p>
            </article>
          </article>
          <article className="solution">
            <h2 className="title">The Solution</h2>
            <article>
              <span>1. Determine Patterns</span>
              <p>With the gem, I chose to include only the company’s vegetable seeds catalogue due to time. To prepare the gem, I first reviewed the catalogues’ site mapping to determine patterns. I was seeking patterns in how a user can click on a parent seed and find the seed they’re looking for, with its details and price.</p>
              <p>From inspecting the web pages, I’ve noted two user journey design patterns. See below for details and the User Journey visuals.</p>

              <p>Pattern A: Takes User from list of vegetables to the Selected Parent Vegetable Seed. A User sees a description paragraph about the selected seed and an image gallery of all the Selected Parent Seed seeds. At this point, a user can select a seed for purchase.</p>
              <p>Pattern B: Takes User from list of vegetables to the Selected Parent Vegetable Seed. A User may see a description paragraph about the selected seed. A User also sees an image gallery of the Categories of the Selected Parent Seed. At this point, a user can select a Category. This action takes them to the Category page where the user may see a description along with an image gallery of the variety of seeds in that category. Upon the user's choice a user can select a seed for purchase and proceed to checkout or continue shopping.</p>

              <span>2. Review HTML & CSS Structure and Patterns</span>
              <p>Pattern A worked for most of the parent seeds. Due to that, I had to accommodate a specific Nokogiri scrape for the seeds affected by Pattern B. See visual to see how I determined the pattern.</p>
            </article>
          </article>
        </section>

        <section className="item design-process">
          <h2 className="title">Sitemapping</h2>
          <div id="sitemap" className="visuals">
            <img src="../../images/web-dev/seed-picker/seed-picker-site-mapping.jpg" alt="seedpicker-site-mapping"/>
          </div>

          <h2 className="title">User Journey</h2>
          <div id="journey" className="visuals">
            <img src="../../images/web-dev/seed-picker/seed-picker-user-journey-a.jpg" alt="seedpicker-user-journey-a"/>
            <img src="../../images/web-dev/seed-picker/seed-picker-user-journey-b.jpg" alt="seedpicker-user-journey-b"/>
          </div>

          <h2 className="title">Scraping</h2>
          <div id="scrapping" className="visuals">
            <img src="../../images/web-dev/seed-picker/seed-picker-scraping-structure.jpg" alt="seedpicker-scraping-structure"/>
          </div>
        </section>

        <section className="item cli">
          <h2 className="title">CLI in Action</h2>
          <div className="visuals">
            <embed src="../../videos/seed-picker-cli-pattern-a.mp4" autostart="false" height="300" width="300" />
          </div>
          <h4>Pattern A</h4>
          <div className="visuals">
            <embed src="../../videos/seed-picker-cli-pattern-b.mp4" autostart="false" height="300" width="300" />
          </div>
          <h4>Pattern B</h4>
        </section>
      </main>
    )
  }
}

export default SeedPicker;
