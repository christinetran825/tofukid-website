import React, { Component } from 'react';

class WebDevelopment extends Component {
  render(){
    return (
      <section id="web-dev">
        <div className="projects">
          <a href="/selfcare"><img src="#" alt="selfcare-still"/></a>
          <a href="/artphilia"><img src="../images/web-dev/artphilia-still.png" alt="artphilia-still"/></a>
          <a href="/teacrate"><img src="../images/web-dev/teacrate-still.png" alt="tea-crate-still"/></a>
          <a href="/seedpicker"><img src="#" alt="seed-picker-still"/></a>
        </div>
      </section>
    )
  }
}

export default WebDevelopment;
