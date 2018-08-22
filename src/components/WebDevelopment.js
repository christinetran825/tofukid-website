import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class WebDevelopment extends Component {
  render(){
    return (
      <section id="web-dev" className="projects">
        <div className="project">
          <Link to="/work/web-dev/selfcare"><img src="../images/web-dev/selfcare/scott-webb-186137-unsplash.jpg" alt="selfcare-still"/></Link>
          <h3>SelfCare</h3>
        </div>

        <div className="project">
          <Link to="/work/web-dev/artphilia"><img src="../images/web-dev/artphilia/kelli-tungay-309722-unsplash.jpg" alt="artphilia-still"/></Link>
          <h3>Artphilia</h3>
        </div>

        <div className="project">
          <Link to="/work/web-dev/teacrate"><img src="../images/web-dev/tea-crate/bright-colors-cups-924006.jpg" alt="tea-crate-still"/></Link>
          <h3>Tea Crate</h3>
        </div>

        <div className="project">
          <Link to="/work/web-dev/seedpicker"><img src="../images/web-dev/seed-picker/cli-2.png" alt="seed-picker-still"/></Link>
          <h3>Seed Picker</h3>
        </div>
      </section>
    )
  }
}

export default WebDevelopment;
