import React, { Component } from 'react';

class About extends Component {
  render(){
    return (
      <div className="container">
        <div className="hero">
          <img src="../images/zukan.png" alt="Zukan Logo" width="200" height="200"/>
          <div className="cover-title">
            <h1>Christine Tran</h1>
            <span>Coder, Illustrator, Insight-seeker.</span>
          </div>
        </div>
        <div className="about">
          <p>Full stack web developer with a passion for design, user experience, and data analysis. A lifelong learner who strives on building different skills.</p>
          <p>I view the world with a child-like awe, admiring the structures and pieces that make things whole by learning how to break things apart and putting them back together.</p>
          <p>I illustrate imaginative characters fit for children’s books in my spare time while sharing my curiosities of the world with trivial fun-facts and stories. On some days, you can find me at flea markets or estate sales hunting vintage paper, art, books, and teacups.</p>
        </div>

        <section className="experiences">
          <div className="things-know">
            <h3>Things I Know</h3>
            <h4 className="experience">HTML</h4>
            <h4 className="experience">CSS</h4>
            <h4 className="experience">Javascript</h4>
            <h4 className="experience">Rails</h4>
            <h4 className="experience">Ruby</h4>
            <h4 className="experience">React</h4>
            <h4 className="experience">Redux</h4>
            <h4 className="experience">Illustrator</h4>
            <h4 className="experience">Photoshop</h4>
            <h4 className="experience">InDesign</h4>
            <h4 className="experience">User Interface</h4>
            <h4 className="experience">User Experience</h4>
          </div>

          <div className="things-do">
            <h3>Things I Can Do</h3>
            <h4 className="experience">Web Design</h4>
            <h4 className="experience">Graphic Design</h4>
            <h4 className="experience">Visual Design</h4>
            <h4 className="experience">Illustration</h4>
            <h4 className="experience">Book Arts</h4>
            <h4 className="experience">Content Strategy</h4>
          </div>

          <div className="things-like">
            <h3>Things I Like</h3>
            <h4 className="experience">Vintage Children's Books</h4>
            <h4 className="experience"><a href="https://www.atlasobscura.com/">Atlas Obscura</a></h4>
            <h4 className="experience">Photography</h4>
          </div>
        </section>
      </div>
    )
  }
}



export default About;
