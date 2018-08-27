import React, { Component } from 'react';

class Branding extends Component {
  render(){
    return (
      <section id="designs" className="projects">
        <div className="project">
          <div className="proj-img">
            <img src="../images/design/finches-pub.jpg" alt="finches logo" />
          </div>
          <h1 className="proj-title">Finches' Publishing</h1>
          <p><span>Tools: Illustrator, Photoshop</span></p>
          <p>I designed a logo for a fictional publishing company. I named it "Finches" after the character Atticus Finch from "To Kill A Mockingbird."</p>
        </div>

        <div className="project">
          <div className="proj-img">
            <img src="../images/design/cynergy-rgb-03.jpg" alt="cynergy logo" />
          </div>
          <h1 className="proj-title">Cynergy</h1>
          <p><span>Tools: Illustrator, Photoshop</span></p>
          <p>An Organizational Development Specialist reached out for a personal logo for their freelancing services. Their ask was to merge their name with the word synergy, convey professionalism, and include a magnolia flower.</p>
        </div>

        <div className="project">
          <div className="proj-img">
            <img src="../images/design/asia-homemart-11.jpg" alt="asia homemart logo"/>
          </div>
          <h1 className="proj-title">Asia Homemart Inc.</h1>
          <p><span>Tools: Illustrator, Photoshop</span></p>
          <p>Company reached out for a logo for their homeware goods. Their ask was to add the company's name in Chinese, express a homely feel, and convey their specialty in Asian home appliances and cookware. Here are a few of my ideas.</p>
        </div>
      </section>
    )
  }
}

export default Branding;
