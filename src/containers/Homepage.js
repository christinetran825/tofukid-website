import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Homepage extends Component {
  render(){
    return (
      <main id="homepage">
        <section className="page-title">
          <h1>Christine Tran</h1>
          <h4><span>Full-Stack UX Designer Proficient in UXR</span></h4>
        </section>
        <section className="about">
          <h2>About</h2>
          <p>As a UX designer, I’m inspired to make the familiar strange and the strange familiar by finding the balance between scientist, psychologist, sociologist, and artists (among others). I focus on the practicality and functionality of the design process and how to channel a users’ needs. It goes beyond crafting an aesthetically pleasing product. To feel and experience the gratitude of people’s delight by making culture and not just consuming it fuels me.</p>
          <p>With a background in programming, I work with other developers as a designer with programming literacy to make the process seamless. I admire the structures and pieces that make things whole through a childlike awe. Wondering, and making connections satisfies my need to see how a story ends. I enjoy seeing the bigger picture while anticipating and imagining in detail what tomorrow could or should be.</p>
        </section>
        <section className="latest-projects">
          <h2>Latest Projects</h2>
          <Link to="/work/web-dev/selfcare">
            <img src="../images/web-dev/selfcare/prototypes/selfcare-landing-page.jpg" alt="selfcare-still"/>
          </Link>

          <Link to="/work/web-dev/artphilia">
            <img src="../images/web-dev/artphilia/prototypes/artphilia-landing-page-high-2x.jpg" alt="artphilia-still"/>
          </Link>

          <Link to="/work/web-dev/teacrate">
            <img src="../images/web-dev/tea-crate/prototypes/landing-page-high.jpg" alt="tea-crate-still"/>
          </Link>
        </section>
        <section className="redirect">
          <Link to="/work" className="button" title="View Full Portfolio">View Full Portfolio</Link>
        </section>
      </main>
    )
  }
}

export default Homepage;
