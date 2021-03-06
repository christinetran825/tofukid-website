import React, { Component } from 'react';
import { Link } from "react-router-dom";

class SelfCare extends Component {
  render(){
    return (
      <main id="selfcare" className="webapps">
        <div className="hero-image">
          <div className="hero-text">
            <h1>SelfCare</h1>
          </div>
        </div>

        <div className="breadcrumbs">
          <span><Link to="/work">Back to Web Development</Link></span>
        </div>

        <section className="item intro">
          <h1 className="title">SelfCare</h1>
          <div className="specs">
            <p><span>My Role:</span> UX, UI, Branding, Developer</p>
            <p><span>Platform:</span> Web App</p>
            <p><span>Languages & Frameworks:</span> Ruby, Ruby on Rails, HTML, CSS, React, Redux, ES6</p>
            <p><span>Tools:</span> Adobe XD, Google Draw</p>
          </div>
          <article className="summary">
            <p>I was inspired by HelloClue. The app tracks a female’s monthly menstrual cycle and fertility accuracy by entering data about one’s period, mood, sexual activity, and personal notes. The app is more than an app, it serves as a technology company with a platform educating society about women’s health, menstrual cycles, data analysis, and research.</p>
            <p>For the past year, I’ve been playing with the idea of building a mental health app. There are many health tracking apps out in the world, but certain features weren’t included or if it did, it played a minor role. From my perspective, health tracking apps do help some user manage their physical health. Though, I wanted to create something that would help manage mental health instead, where users can track possible trigger points. The app could be something like HelloClue, creating a platform to bring awareness and education to mental health and provide resources like coping strategies.</p>
          </article>
        </section>

        <section className="item details">
          <article className="goals">
            <h2 className="title">What is SelfCare</h2>
            <p>SelfCare is a fictional company seeking to understand mental health through user data entry. Can we find patterns through a user's daily habits that might affect their symptoms? Could these patterns offer new approaches towards symptom management?</p>
            <div className="project-links">
              <Link to="selfcare.application.heroku.com" target="_blank">Testing</Link>

              <Link to="https://youtu.be/6Py4HcsAqNQ" target="_blank">Walkthrough</Link>

              <Link to="https://medium.com/@christine_tran/portfolio-project-5-react-redux-rails-api-selfcare-42aa58311d3f" target="_blank">Blog Post</Link>

              <Link to="https://github.com/christinetran825/SelfCare-C" target="_blank">GitHub</Link>
            </div>
          </article>
          <article className="problem">
            <h2 className="title">The Problem</h2>
            <span>1. How can we make the app data entry simple, friendly, and most importantly not overwhelming?</span>
            <p>Those affected with mental health can struggle with simple things like getting out of bed. The app should allow users to input their data with a simple click or tap. I thought maybe setting up a calendar like structure with a box denoting each symptom that can be clicked or tapped if the user completed that task.</p>

            <span>2. What symptoms should be include?</span>
            <p>I mapped out a variety of actions and activities that could be useful as symptom data. Below is a large map of what I think could be included. While observing the map, I noticed that the data can be very overwhelming. Perhaps we can have the actions customizable by the user or by physician guidance to help target more specific areas.</p>

            <span>3. How can we implement an organization system?</span>
            <p>Organizing paperwork can be an issue for many people with or without being affected by mental health. In terms of health, there are those who seek more than one physicians or have had changes in medical insurances. I thought it would be helpful to allow users record their past and present medical providers, insurances, and medications. It can help medical professionals determine the best care and alternatives if a user chooses to share their information.</p>
          </article>
          <article className="solution">
            <h2 className="title">The Solution</h2>
            <p>Build a mobile health app for users to track their daily habits for a symptom management system with a backend API to load data via Redux to a React based app. </p>
          </article>
        </section>

        <section className="item design-process">
          <h2>Design Process</h2>
          <p>In progress</p>
          {/* <h2>Sitemapping</h2>
          <div id="sitemap" className="visuals">

          </div>

          <h2>Wireframes</h2>
          <div id="wireframes" className="visuals">

          </div>

          <h2>Prototypes</h2>
          <div id="prototypes" className="visuals">

          </div> */}
        </section>

      </main>
    )
  }
}

export default SelfCare;
