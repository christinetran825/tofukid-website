import React, { Component } from 'react';

class About extends Component {
  render(){
    return (
      <div className="wrapper">
        <div className="about">
          <div className="Hero">
            <img src="../images/zukan.png" alt="Zukan Logo" width="200" height="200"/>
            <h1>Christine Tran</h1>
            <span>Coder, Illustrator, Insight-seeker.</span>
          </div>
          <div className="content">
            <p>Full stack web developer with a passion for design, user experience, and data analysis. A lifelong learner who strives on building different skills. I view the world with a child-like awe, admiring the structures and pieces that make things whole by learning how to break things apart and putting them back together. I illustrate imaginative characters fit for children’s books in my spare time while sharing my curiosities of the world with trivial fun-facts and stories. On some days, you can find me at flea markets or estate sales hunting vintage paper, art, books, and teacups.</p>
          </div>
        </div>

        <div className="Experience">
          <h3>Things I Know</h3>
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
              <li>User Interface/Experience</li>
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

      </div>
    )
  }
}



export default About;
