import React, { Component } from 'react';

class Illustrations extends Component {
  render(){
    return (
      <section className="illustrations">
        <h1>Illustrations</h1>
        <div className="illustration">
          <div className="title">
            <div className="project-name">
              <h3>Taste Addiction</h3>
            </div>
          </div>
          <div className="details">
            <p>I was playing with the idea of what kinds of 'dipping' or 'sauces' most people are addicted to. I expressed the gluttony of the addiction by having the source of ingredient drool and ooze its glorious goodness.</p>
          </div>
          <div className="images">
            <img src="../images/taste_all_sauces.jpg" alt="drooling sauces" />
            <img src="../images/taste_ketchup.jpg" alt="drooling ketchup" />
            <img src="../images/taste_peanut-butter.jpg" alt="drooling peanut butter" />
            <img src="../images/taste_guacamole.jpg" alt="drooling avocado" />
          </div>
        </div>
        <div className="illustration">
          <div className="title">
            <div className="project-name">
              <h3>Thank You, Teachers</h3>
            </div>
          </div>
          <div className="details">
            <p>In honor of Teacher's Day, I've drawn a series of portraits of the teachers who inspired me in many ways throughout my education. Check out my Tumblr <a href="http://thanksforteachers.tumblr.com/" target="blank">"thanksforteacher"</a> to view more portraits.</p>
          </div>
          <div className="images">
            <img src="../images/teachers-1.jpg" alt="Teachers Sketch" />
            <img src="../images/teachers-2.jpg" alt="Teachers Sketch" />
          </div>
        </div>
        <div className="illustration">
          <div className="title">
            <div className="project-name">
              <h3>Taco Time</h3>
            </div>
          </div>
          <div className="details">
            <p>Who doesn't like tacos? These digital art posters were made for an imaginary taco brand. Each poster has a pattern showing foods and objects related to tacos like chilies, hot sauce, sombreros.</p>
          </div>
          <div className="images">
            <img src="../images/ortega-chili.jpg" alt="chili poster" />
            <img src="../images/ortega-sauce.jpg" alt="sauce poster" />
            <img src="../images/ortega-sombrero.jpg" alt="sombrero poster" />
          </div>
        </div>
      </section>
    )
  }
}

export default Illustrations;
