import React, { Component } from 'react';

class Branding extends Component {
  render(){
    return (
      <section id="designs">
        <div className="branding">
          <div className="blurb">
            <h3 className="proj-name">Finches' Publishing</h3>
            <h5 className="proj-tools">Tools: Illustrator, Photoshop</h5>
            <p className="proj-description">I designed a logo for a fictional publishing company. I named it "Finches" after the character Atticus Finch from "To Kill A Mockingbird."</p>
          </div>
          <div className="proj-img">
            <img src="../images/design/finches-pub.jpg" alt="finches logo" />
          </div>
        </div>

        <div className="branding">
          <div className="blurb">
            <h3 className="proj-name">Cynergy</h3>
            <h5 className="proj-tools">Tools: Illustrator, Photoshop</h5>
            <p className="proj-description">An Organizational Development Specialist reached out for a personal logo for their freelancing services. Their ask was to merge their name with the word synergy, convey professionalism, and include a magnolia flower.</p>
          </div>
          <div className="proj-img">
            <img src="../images/design/cynergy-rgb-03.jpg" alt="cynergy logo" />
          </div>
        </div>

        <div className="branding">
          <div className="blurb">
            <h3 className="proj-name">Asia Homemart Inc.</h3>
            <h5 className="proj-tools">Tools: Illustrator, Photoshop</h5>
            <p className="proj-description">Company reached out for a logo for their homeware goods. Their ask was to add the company's name in Chinese, express a homely feel, and convey their specialty in Asian home appliances and cookware. Here are a few of my ideas.</p>
          </div>
          <div className="proj-img">
            <img src="../images/design/asia-homemart-11.jpg" alt="asia homemart logo"/>
          </div>
        </div>
      </section>
    )
  }
}

export default Branding;
