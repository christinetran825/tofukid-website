import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class WebDevelopment extends Component {
  render(){
    return (
      <section id="web-dev" className="projects">
        <article className="project">
          <Link to="/work/web-dev/selfcare">
            <img src="../images/web-dev/selfcare/prototypes/selfcare-landing-page.jpg" alt="selfcare-still"/>
            <h1>SelfCare</h1>
          </Link>
        </article>

        <article className="project">
          <Link to="/work/web-dev/artphilia">
            <img src="../images/web-dev/artphilia/prototypes/artphilia-landing-page-high-2x.jpg" alt="artphilia-still"/>
            <h1>Artphilia</h1>
          </Link>
        </article>

        <article className="project">
          <Link to="/work/web-dev/teacrate">
            <img src="../images/web-dev/tea-crate/prototypes/landing-page-high.jpg" alt="tea-crate-still"/>
            <h1>Tea Crate</h1>
          </Link>
        </article>

        <article className="project">
          <Link to="/work/web-dev/seedpicker">
            <img src="../images/web-dev/seed-picker/cli-2.png" alt="seed-picker-still"/>
            <h1>Seed Picker</h1>
          </Link>
        </article>
      </section>
    )
  }
}

export default WebDevelopment;
