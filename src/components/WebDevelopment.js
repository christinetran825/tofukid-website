import React, { Component } from 'react';

class WebDevelopment extends Component {
  render(){
    return (
      <section id="web-dev" className="projects">
        <div className="project">
          <a href="/selfcare"><img src="#" alt="selfcare-still"/></a>
          <h3>SelfCare</h3>
        </div>
        <div className="project">
          <a href="/artphilia"><img src="../images/web-dev/artphilia/artphilia-landing-page-high-2x.jpg" alt="artphilia-still"/></a>
          <h3>Artphilia</h3>
        </div>
        <div className="project">
          <a href="/teacrate"><img src="../images/web-dev/tea-crate/tea-crate-landing-page-high-2x.jpg" alt="tea-crate-still"/></a>
          <h3>Tea Crate</h3>
        </div>
        <div className="project">
          <a href="/seedpicker"><img src="#" alt="seed-picker-still"/></a>
          <h3>Seed Picker</h3>
        </div>
      </section>
    )
  }
}

export default WebDevelopment;
