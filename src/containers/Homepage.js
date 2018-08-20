import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Homepage extends Component {
  render(){
    return (
      <main id="homepage">
        <h1>Christine Tran</h1>
        <h3>Full-Stack UX Designer Proficient in UXR</h3>
        <section className="about">
          <h2>About</h2>
          <p>As a UX designer, I’m inspired to make the familiar strange and the strange familiar by finding the balance between scientist, psychologist, sociologist, and artists (among others). I focus on the practicality and functionality of the design process and how to channel a users’ needs. It goes beyond crafting an aesthetically pleasing product. To feel and experience the gratitude of people’s delight by making culture and not just consuming it fuels me.</p>
          <p>With a background in programming, I work with other developers as a designer with programming literacy to make the process seamless. I admire the structures and pieces that make things whole through a childlike awe. Wondering, and making connections satisfies my need to see how a story ends. I enjoy seeing the bigger picture while anticipating and imagining in detail what tomorrow could or should be.</p>
        </section>
        <section className="latest-projects">
          <h2>Latest Projects</h2>
          <img src="#" alt="selfcare-still"/>
          <img src="../images/web-dev/artphilia/prototypes/artphilia-landing-page-high-2x.jpg" alt="artphilia-still"/>
          <img src="../images/web-dev/tea-crate/prototypes/landing-page-high.jpg" alt="tea-crate-still"/>
        </section>
        <div className="cta">
          <Link to="/work" className="button" title="View Full Portfolio">View Full Portfolio</Link>
        </div>
      </main>
    )
  }
}

export default Homepage;
