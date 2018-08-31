import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

class Illustrations extends Component {
  render(){
    return (
      <section id="illustrations" className="projects">
        <div className="project">
          <div className="proj-img">
            <Carousel>
              <div>
                <img src="../images/illust/taste_all_sauces.jpg" alt="drooling sauces" />
              </div>
              <div>
                <img src="../images/illust/taste_ketchup.jpg" alt="drooling ketchup" />
              </div>
              <div>
                <img src="../images/illust/taste_guacamole.jpg" alt="drooling avocado" />
              </div>
              <div>
                <img src="../images/illust/taste_peanut-butter.jpg" alt="drooling peanut" />
              </div>
            </Carousel>
          </div>
          <h1 className="proj-title">Taste Addiction</h1>
          <p><span>Tools: Illustrator</span></p>
          <p>I was playing with the idea of what kinds of 'dipping' or 'sauces' most people are addicted to. I expressed the gluttony of the addiction by having the source of ingredient drool and ooze its glorious goodness.</p>
        </div>

        <div className="project">
          <div className="proj-img">
            <Carousel>
              <div>
                <img src="../images/illust/ortega-chili.jpg" alt="chili poster" />
              </div>
              <div>
                <img src="../images/illust/ortega-sauce.jpg" alt="sauce poster" />
              </div>
              <div>
                <img src="../images/illust/ortega-sombrero.jpg" alt="sombrero poster" />
              </div>
            </Carousel>
          </div>
          <h1 className="proj-title">Taco Time</h1>
          <p><span>Tools: Illustrator</span></p>
          <p>Who doesn't like tacos? These digital art posters were made for an imaginary taco brand. Each poster has a pattern showing foods and objects related to tacos like chilies, hot sauce, sombreros.</p>
        </div>

        <div className="project">
          <div className="proj-img">
            <Carousel>
              <div>
                <img src="../images/illust/teachers-1.jpg" alt="Teachers Sketch" />
              </div>
              <div>
                <img src="../images/illust/teachers-2.jpg" alt="Teachers Sketch" />
              </div>
            </Carousel>
          </div>
          <h1 className="proj-title">Thank You, Teachers</h1>
          <p><span>Tools: Pen & Ink</span></p>
          <p>In honor of Teacher's Day, I've drawn a series of portraits of the teachers who inspired me in many ways throughout my education. Check out my Tumblr <a href="http://thanksforteachers.tumblr.com/" target="blank">"thanksforteacher"</a> to view more portraits.</p>
        </div>
      </section>
    )
  }
}

export default Illustrations;
