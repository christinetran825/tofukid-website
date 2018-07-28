import React, { Component } from 'react';
import WebDevelopment from '../components/WebDevelopment'
import Illustrations from '../components/Illustrations'
import Branding from '../components/Branding'
import Bookmaking from '../components/Bookmaking'

class Work extends Component {
  render(){
    return (
      <div className="work">
        <div className="blurb">
          <h1>Work</h1>
          <p>I’m a curious creature. My inventive mind usually generates more possibilities than I can handle. I’m the kind of person who enjoys unraveling a bundle of knots or putting together a 1,000 piece jigsaw puzzle. I tinker away on new ideas  whenever the inkling captures me, which is very often.</p>
        </div>
        <div className="work-navlinks">
          <ul>
            <li>Web Development</li>
            <li>Design</li>
            <li>Illustrations</li>
            <li>Book Arts</li>
            <li>Strategy</li>
          </ul>
        </div>
        {/* if user clicks on illustrations show Illustrations component; otherwise don't show anything <a href="https://society6.com/tofukidSociety6">Society6</a> <Illustrations/> <Branding/> <Bookmaking/> */}
      </div>
    )
  }
}

export default Work;
