import React, { Component } from 'react';

class Branding extends Component {
  render(){
    return (
      <section className="brands">
        <div className="brand">
          <div className="title">
            <div className="project-name">
              <h3>Finches' Publishing</h3>
            </div>
          </div>
          <div className="details">
            <p>I designed a logo for a fictional publishing company. I named it "Finches" after the character Atticus Finch from "To Kill A Mockingbird."</p>
          </div>
          <div className="images unique">
            <img src="../images/finches-pub.jpg" alt="finches logo" />
          </div>
        </div>
        <div className="brand">
          <div className="title">
            <div className="project-name">
              <h3>Cynergy</h3>
            </div>
          </div>
          <div className="details">
            <p>An Organizational Development Specialist reached out for a personal logo for their freelancing services. Their ask was to merge their name with the word synergy, convey professionalism, and include a magnolia flower.</p>
          </div>
          <div className="images unique">
            <img src="../images/cynergy-rgb-03.jpg" alt="cynergy logo" />
          </div>
        </div>
        <div className="brand">
          <div className="title">
            <div className="project-name">
              <h3>Asia Homemart Inc.</h3>
            </div>
          </div>
          <div className="details">
            <p>Company reached out for a logo for their homeware goods. Their ask was to add the company's name in Chinese, express a homely feel, and convey their specialty in Asian home appliances and cookware. Here are a few of my ideas.</p>
          </div>
          <div className="images">
            <img src="../images/asia-homemart-10.jpg" alt="asia homemart logo" />
            <img src="../images/asia-homemart-11.jpg" alt="asia homemart logo" />
            <img src="../images/asia-homemart-12.jpg" alt="asia homemart logo" />
            <img src="../images/asia-homemart-14.jpg" alt="asia homemart logo" />
          </div>
        </div>
      </section>
    )
  }
}

export default Branding;
