import React, { Component } from 'react';

class Illustrations extends Component {
  render(){
    return (
      <section id="illustrations">
        <div className="artwork">
          <div className="blurb">
            <h3 className="proj-name">Taste Addiction</h3>
            <h5 className="proj-tools">Tools: Illustrator</h5>
            <p className="proj-description">I was playing with the idea of what kinds of 'dipping' or 'sauces' most people are addicted to. I expressed the gluttony of the addiction by having the source of ingredient drool and ooze its glorious goodness.</p>
          </div>
          <div className="proj-img">
            <img src="../images/illust/taste_all_sauces.jpg" alt="drooling sauces" />
            <img src="../images/illust/taste_ketchup.jpg" alt="drooling ketchup" />
            <img src="../images/illust/taste_peanut-butter.jpg" alt="drooling peanut butter" />
            <img src="../images/illust/taste_guacamole.jpg" alt="drooling avocado" />
          </div>
        </div>

        <div className="artwork">
          <div className="blurb">
            <h3 className="proj-name">Taco Time</h3>
            <h5 className="proj-tools">Tools: Illustrator</h5>
            <p className="proj-description">Who doesn't like tacos? These digital art posters were made for an imaginary taco brand. Each poster has a pattern showing foods and objects related to tacos like chilies, hot sauce, sombreros.</p>
          </div>
          <div className="proj-img">
            <img src="../images/illust/ortega-chili.jpg" alt="chili poster" />
            <img src="../images/illust/ortega-sauce.jpg" alt="sauce poster" />
            <img src="../images/illust/ortega-sombrero.jpg" alt="sombrero poster" />
          </div>
        </div>

        <div className="artwork">
          <div className="blurb">
            <h3 className="proj-name">Thank You, Teachers</h3>
            <h5 className="proj-tools">Tools: Pen & Ink</h5>
            <p className="proj-description">In honor of Teacher's Day, I've drawn a series of portraits of the teachers who inspired me in many ways throughout my education. Check out my Tumblr <a href="http://thanksforteachers.tumblr.com/" target="blank">"thanksforteacher"</a> to view more portraits.</p>
          </div>
          <div className="proj-img">
            <img src="../images/illust/teachers-1.jpg" alt="Teachers Sketch" />
            <img src="../images/illust/teachers-2.jpg" alt="Teachers Sketch" />
          </div>
        </div>
      </section>
    )
  }
}

export default Illustrations;
