import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class TeaCrate extends Component {
  render(){
    return (
      <main id="teacrate" className="webapps">
        <div className="hero-image">
          <div className="hero-text">
            <h1>Tea Crate</h1>
          </div>
        </div>

        <div className="breadcrumbs">
          <span><Link to="/work">Back to Web Development</Link></span>
        </div>

        <section className="item intro">
          <h1 className="title">Tea Crate</h1>
          <div className="specs">
            <p><span>My Role:</span> UX, UI, Branding, Developer</p>
            <p><span>Platform:</span> Web App</p>
            <p><span>Languages & Frameworks:</span> Ruby, Ruby on Rails, Sinatra, Model View Controller (MVC), HTML, CSS</p>
            <p><span>Tools:</span> Adobe XD, Google Draw</p>
          </div>
          <article className="summary">
            <p>Tea represents a culture, flavors, and reflection. How it’s collected, processed, practiced, and consume varies from culture to culture and person to person. Usually, you can tell the level of tea devotion by the drinker’s tea collection. A casual drinker will have maybe three types of tea. Tea Lovers can have five or seven. True tea connoisseurs will an entire cupboard bursting with blends and flavors for any and every tea occasion.</p>
          </article>
        </section>

        <section className="item details">
          <article className="goals">
            <h2 className="title">What is Tea Crate</h2>
            <p>Tea Crate is a fictional company seeking to collect teas of the world through the help of their users.</p>
            <div className="project-links">
              <Link to="https://tea-crate.herokuapp.com/" target="_blank">Testing</Link>

              <Link to="https://youtu.be/3LCFISldE2w" target="_blank">Walkthrough</Link>

              <Link to="https://medium.com/@christine_tran/portfolio-project-2-sinatra-mvc-tea-crate-9377a07c5a3a" target="_blank">Blog Post</Link>

              <Link to="https://github.com/christinetran825/tea-crate" target="_blank">GitHub</Link>
            </div>
          </article>
          <article className="problem">
            <h2 className="title">The Problem</h2>
            <div>
              <span>1. Tracking Teas</span>
              <p>All pure teas originate from the same plant species, Camellia Sinensis. Teas become a type because of different processing procedures. Typically there are 7 types of tea - black, green, Oolong, white, roobios, and herbal infusions. Many brands, big and small, produce and market their own version of each type of tea.</p>
            </div>
            <div>
              <span>2. Defining Tea Experiences</span>
              <p>There are people who like tea, who love tea, and who can’t function without at least one cup of tea a day. There may be some who might not care or be able to distinguish a tea’s characteristics before adding any other ingredients. Depending on the tea drinker, the “way of tea” varies.</p>
              <ul>
                <li>Should tea be consumed neat, straight?</li>
                <li>Should a flavor or a combination of flavors like milk, cream, sugar, and lemon be added to tea?</li>
                <li>Should tea leaves be loose or in a teabag?</li>
                <li>Should the tea be brewed at the exact duration for the perfect flavor?</li>
              </ul>
            </div>
          </article>
          <article className="solution">
            <h2 className="title">The Solution</h2>
            <p>Design an app allowing users to input the brand name, tea name, and tea type to the tea they’ve tried. They can include the way they brewed and consumed their tea to record their version of the perfect tea. Tea crate can collect the various teas experienced by their users while their users can keep track of how they had their best cup of tea?</p>
          </article>
        </section>

        <section className="item design-process">
          <h2 className="title">Sitemapping</h2>
          <div id="sitemap" className="visuals">
            <img src="../../images/web-dev/tea-crate/tea-crate-site-mapping.jpg" alt="tea-crate-site-mapping"/>
          </div>

          <h2 className="title">Wireframing</h2>
          <div id="wireframes" className="visuals">
            <img className="wireframes" src="../../images/web-dev/tea-crate/wireframes/landing-page.jpg" alt="tea-crate-landing-page"/>
            <img className="wireframes" src="../../images/web-dev/tea-crate/wireframes/my-tea-crate.jpg" alt="tea-crate-tea-list"/>
            <img className="wireframes" src="../../images/web-dev/tea-crate/wireframes/tea-resources-web-pages.jpg" alt="tea-crate-tea-resources-web-pages"/>
            <img className="wireframes" src="../../images/web-dev/tea-crate/wireframes/brew-timer.jpg" alt="tea-crate-brew-timer"/>
            <img className="forms" src="../../images/web-dev/tea-crate/wireframes/add-tea-form-modal.jpg" alt="tea-crate-add-tea-form"/>
          </div>

          <h2 className="title">Prototypes</h2>
          <div id="prototypes" className="visuals">
            <img className="wireframes" src="../../images/web-dev/tea-crate/prototypes/landing-page-high.jpg" alt="tea-crate-landing-page"/>
            <img className="wireframes" src="../../images/web-dev/tea-crate/prototypes/my-tea-crate.jpg" alt="tea-crate-tea-list"/>
            <img className="wireframes" src="../../images/web-dev/tea-crate/prototypes/tea-resources-web-pages.jpg" alt="tea-crate-tea-resources-web-pages"/>
            <img className="wireframes" src="../../images/web-dev/tea-crate/prototypes/brew-timer.jpg" alt="tea-crate-brew-timer"/>
            <img className="forms" src="../../images/web-dev/tea-crate/prototypes/add-tea-form-modal.jpg" alt="tea-crate-add-tea-form"/>
          </div>
      </section>
      </main>
    )
  }
}

export default TeaCrate;
