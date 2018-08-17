import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Homepage extends Component {
  render(){
    return (
      <main className="homepage">
        <div className="home-title">
          <h1>Christine Tran</h1>
          <h5>The Tofu Kid</h5>
        </div>
        <section className="latest-projects">
          <h2>Latest Projects</h2>
          <img src="#" alt="selfcare-still"/>
          <img src="#" alt="artphilia-still"/>
          <img src="#" alt="tea-crate-still"/>
          <Link to="/work">See More Work</Link>
        </section>
      </main>
    )
  }
}

export default Homepage;
