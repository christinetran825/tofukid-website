import React, { Component } from 'react';

class About extends Component {
  render(){
    return (
      <div className="container">
        <div className="hero">
          <img src="../images/zukan.png" alt="Zukan Logo" width="200" height="200"/>
        </div>
        <div className="cover-title">
          <h1>Christine Tran</h1>
          <span>Coder, Illustrator, Insight-seeker.</span>
        </div>
        <div className="blurb">
          <p>Full stack web developer with a passion for design, user experience, and data analysis. A lifelong learner who strives on building different skills.</p>
          <p>I view the world with a child-like awe, admiring the structures and pieces that make things whole by learning how to break things apart and putting them back together.</p>
          <p>I illustrate imaginative characters fit for children’s books in my spare time while sharing my curiosities of the world with trivial fun-facts and stories. On some days, you can find me at flea markets or estate sales hunting vintage paper, art, books, and teacups.</p>
        </div>

        <section className="experiences">
          <div className="experience know">
            <h3>Things I Know</h3>
            <h4>HTML</h4>
            <h4>CSS</h4>
            <h4>Javascript</h4>
            <h4>Rails</h4>
            <h4>Ruby</h4>
            <h4>React</h4>
            <h4>Redux</h4>
            <h4>Illustrator</h4>
            <h4>Photoshop</h4>
            <h4>InDesign</h4>
            <h4>User Interface</h4>
            <h4>User Experience</h4>
          </div>
          <div className="experience do">
            <h3>Things I Can Do</h3>
            <h4>Web Design</h4>
            <h4>Graphic Design</h4>
            <h4>Visual Design</h4>
            <h4>Illustration</h4>
            <h4>Book Arts</h4>
            <h4>Content Strategy</h4>
          </div>
          <div className="experience like">
            <h3>Things I Like</h3>
            <h4>Vintage Children's Books</h4>
            <h4><a href="https://www.atlasobscura.com/">Atlas Obscura</a></h4>
            <h4>Photography</h4>
            <h4>Food</h4>
          </div>
        </section>
      </div>
    )
  }
}



export default About;
