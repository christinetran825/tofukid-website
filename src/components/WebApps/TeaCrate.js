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
            <div className="roles">
              <p>My Role: UX, UI, Branding, Developer</p>
              <p>Platform: Web App</p>
              <p>Languages & Frameworks: Ruby, Ruby on Rails, Sinatra, Model View Controller (MVC), HTML, CSS</p>
            </div>
            <div className="summary">
              <h2>Creating Tea Crate</h2>
              <p>Tea represents a culture, flavors, and reflection. How it’s collected, processed, practiced, and consume varies from culture to culture and person to person. Usually, you can tell the level of tea devotion by the drinker’s tea collection. A casual drinker will have maybe three types of tea. Tea Lovers can have five or seven. True tea connoisseurs will an entire cupboard bursting with blends and flavors for any and every tea occasion. Tea Crate is a fictional company seeking to collect teas of the world through the help of their users.</p>
            </div>
            <div className="problem">
              <h2>The Problem</h2>
              <h4>1. Tracking Teas</h4>
              <p>All pure teas originate from the same plant species, Camellia Sinensis. Teas become a type because of different processing procedures. Typically there are 7 types of tea - black, green, Oolong, white, roobios, and herbal infusions. Many brands, big and small, produce and market their own version of each type of tea.</p>
              <h4>2. Defining Tea Experiences</h4>
              <p>There are people who like tea, who love tea, and who can’t function without at least one cup of tea a day. There may be some who might not care or be able to distinguish a tea’s characteristics before adding any other ingredients. Depending on the tea drinker, the “way of tea” varies.</p>
              <ul>
                <li>Should tea be consumed neat, straight?</li>
                <li>Should a flavor or a combination of flavors like milk, cream, sugar, and lemon be added to tea?</li>
                <li>Should tea leaves be loose or in a teabag?</li>
                <li>Should the tea be brewed at the exact duration for the perfect flavor?</li>
              </ul>
            </div>
            <div className="solution">
              <h2>The Solution</h2>
              <p>Design an app allowing users to input the brand name, tea name, and tea type to the tea they’ve tried. They can include the way they brewed and consumed their tea to record their version of the perfect tea. Tea crate can collect the various teas experienced by their users while their users can keep track of how they had their best cup of tea?</p>
            </div>
            <div className="visuals">
              <h2>Sitemapping</h2>
              <img src="./images/web-dev/tea-crate/tea-crate-site-mapping.jpg" alt="tea-crate-site-mapping"/>
              <h2>Wireframing</h2>
              <img className="wireframes" src="./images/web-dev/tea-crate/landing-page-2x.jpg" alt="tea-crate-landing-page"/>
              <img className="wireframes" src="./images/web-dev/tea-crate/my-tea-crate-2x.jpg" alt="tea-crate-tea-list"/>
              <img className="wireframes" src="./images/web-dev/tea-crate/tea-resources-web-pages-2x.jpg" alt="tea-crate-tea-resources-web-pages"/>
              <img className="wireframes" src="./images/web-dev/tea-crate/brew-timer-2x.jpg" alt="tea-crate-brew-timer"/>
              <img className="forms" src="./images/web-dev/tea-crate/add-tea-form-modal-2x.jpg" alt="tea-crate-add-tea-form"/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default TeaCrate;
