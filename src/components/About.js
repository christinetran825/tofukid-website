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
            <li><a href="https://github.com/christinetran825">GitHub</a></li>
            <li><a href="https://medium.com/@christinetran_81275">Medium Blog</a></li>
          </ul>
        </div>

        <p>Put image here</p>
        <h1>Christine Tran</h1>
        <span>Coder, Illustrator, Insight-seeker.</span>
        <p>Full stack web developer with a passion for design, user experience, and data analysis. A lifelong learner who strives on building different skills. I view the world with a child-like awe, admiring the structures and pieces that make things whole by learning how to break things apart and putting them back together. I illustrate imaginative characters fit for children’s books in my spare time while sharing my curiosities of the world with trivial fun-facts and stories. On some days, you can find me at flea markets or estate sales hunting vintage paper, art, books, and teacups.</p>

        <h3>Things I know</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Rails</li>
            <li>Ruby</li>
            <li>React</li>
            <li>Redux</li>
            <li>Illustrator</li>
            <li>Photoshop</li>
            <li>InDesign</li>
          </ul>

        <h3>Things I Can Do</h3>
          <ul>
            <li>Web Development/Design</li>
            <li>Graphic Design</li>
            <li>Visual Design</li>
            <li>Illustration</li>
            <li>Book Arts</li>
            <li>Content</li>
            <li>Strategy</li>
          </ul>
      </div>
    )
  }
}



export default About;
