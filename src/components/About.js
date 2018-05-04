import React, { Component } from 'react';

class About extends Component {
  render(){
    return (
      <div className="wrapper">
        <div className="about">
          <div className="hero">
            <img src="../images/zukan.png" alt="Zukan Logo" width="200" height="200"/>
            <h1>Christine Tran</h1>
            <span>Coder, Illustrator, Insight-seeker.</span>
          </div>
          <div className="content">
            <p>Full stack web developer with a passion for design, user experience, and data analysis. A lifelong learner who strives on building different skills. I view the world with a child-like awe, admiring the structures and pieces that make things whole by learning how to break things apart and putting them back together. I illustrate imaginative characters fit for children’s books in my spare time while sharing my curiosities of the world with trivial fun-facts and stories. On some days, you can find me at flea markets or estate sales hunting vintage paper, art, books, and teacups.</p>
          </div>
        </div>

        <section className="experiences">
          <div className="things-know">
            <h3>Things I Know</h3>
            <ul>
              <li className="experience">HTML</li>
              <li className="experience">CSS</li>
              <li className="experience">Javascript</li>
              <li className="experience">Rails</li>
              <li className="experience">Ruby</li>
              <li className="experience">React</li>
              <li className="experience">Redux</li>
              <li className="experience">Illustrator</li>
              <li className="experience">Photoshop</li>
              <li className="experience">InDesign</li>
              <li className="experience">User Interface/Experience</li>
            </ul>
          </div>

          <div className="things-do">
            <h3>Things I Can Do</h3>
            <ul>
              <li className="experience">Web Development/Design</li>
              <li className="experience">Graphic Design</li>
              <li className="experience">Visual Design</li>
              <li className="experience">Illustration</li>
              <li className="experience">Book Arts</li>
              <li className="experience">Content</li>
              <li className="experience">Strategy</li>
            </ul>
          </div>
        </section>

      </div>
    )
  }
}



export default About;
