import React, { Component } from 'react';

class About extends Component {
  render(){
    return (
      <div>
        <div id="icons">
          <ul>
            <li><span className="fa-stack fa-lg fa-1x"><a href="mailto:christinetran825@gmail.com"><i className="fa fa-envelope-o" aria-hidden="true"></i></a></span></li>
            <li><span className="fa-stack fa-lg fa-1x"><a href="https://www.instagram.com/thetofukid/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></span></li>
            <li><span className="fa-stack fa-lg fa-1x"><a href="https://www.linkedin.com/in/christinetran825/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></span></li>
          </ul>
        </div>
        
        <h1>About</h1>
        <p>Coder, Illustrator, Insight-seeker. A lifelong learner who strives on building different skills. I view the world with a child-like awe. I admire the structures and pieces that make things whole by learning how to break things apart and putting them back together. On some days, you can find me at flea markets or estate sales hunting vintage paper, art, books, and teacups.</p>

        <h3>Skills</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Rails</li>
            <li>Ruby</li>
            <li>React</li>
            <li>Redux</li>
          </ul>

        <h3>Arts/Graphics</h3>
          <ul>
            <li>Illustrator</li>
            <li>Photoshop</li>
            <li>InDesign</li>
            <li>Graphic Design</li>
            <li>Character Design</li>
            <li>Book Arts</li>
            <li>Visual Design</li>
          </ul>

        <h3>Advertising</h3>
          <ul>
            <li>Content</li>
            <li>Strategy</li>
            <li>Print</li>
          </ul>
      </div>
    )
  }
}



export default About;
