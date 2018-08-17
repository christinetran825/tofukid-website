import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Homepage extends Component {
  render(){
    return (
      <main id="homepage">
        <h1>Christine Tran</h1>
        <h3>Full-Stack UX Designer Proficient in UXR</h3>
        <section className="latest-projects">
          <h2>Latest Projects</h2>
          <img src="#" alt="selfcare-still"/>
          <img src="../images/web-dev/artphilia/prototypes/artphilia-landing-page-high-2x.jpg" alt="artphilia-still"/>
          <img src="../images/web-dev/tea-crate/prototypes/landing-page-high.jpg" alt="tea-crate-still"/>
          <Link to="/work">See More Work</Link>
        </section>
      </main>
    )
  }
}

export default Homepage;
