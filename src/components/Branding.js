import React, { Component } from 'react';

class Branding extends Component {
  render(){
    return (
      <section className="branding">
        <h1>Logos</h1>
        <section className="logos">
          <div className="logo">
            <h4>Finches' Publishing</h4>
            <p>I wanted to create my own logo of a fictional company. I named it "Finches" after the character Atticus Finch from To Kill A Mockingbird.</p>
          </div>
          <div className="logo">
            <h4>Cynergy</h4>
            <p>An Organizational Development Specialist reached out for a personal logo for their freelancing services. Their ask was to merge their name with the word synergy, convey professionalism, and include a magnolia flower.</p>
          </div>
          <div className="logo">
            <h4>Asia Homemart Inc.</h4>
            <p>Their ask was to add the company's name in Chinese, express a homely feel, and convey their specialty in Asian home appliances and cookware. </p>
          </div>
        </section>

        <h1>Art Direction</h1>
        <section className="art-direction">
          <div className="campaign">
            <h4>Hunt's Ketchup</h4>
            <p>One of the most common rituals to everyday American dining is squirting some red ketchup to our burgers, fries, hot dogs, and eggs. For some of us, ketchup isn't just a ritual, it's a must-have item with a purpose. I wanted to explore just how far some people would go with their must-have golden red savior through photos.</p>
          </div>
          <div className="campaign">
            <h4>Boudreux's Buttpaste</h4>
            <p>A diaper rash cream called Boudreaux's Buttpaste has a funny name. Thought I would design a set of posters for it. Each headline was made to be cheeky (pun intended :p) from the point of view of a baby with diaper rash.</p>
          </div>
        </section>
      </section>
    )
  }
}

export default Branding;
