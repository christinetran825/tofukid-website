import React, { Component } from 'react';

class About extends Component {
  render(){
    return (
      <div className="about">
        <h1 className="page-title">Christine Tran</h1>
        <h2 className="sub-title">Synthesizer</h2>
        <div className="blurb">
          <p>Full-Stack UX Designer</p>
          <p>As an abstract thinker, I’m fascinated by the future. I enjoy seeing the bigger picture while anticipating and  imagining in detail what tomorrow could or should be. Inspired by the adage of making the familiar strange and the strange familiar, I admire the structures and pieces that make things whole through a child-like awe. Art, design, and complex philosophical or scientific concepts are like catnip to me. Wondering, and making connections satisfies my need to see how a story ends. To feel and experience the gratitude and appreciation of people’s delight through making culture, not just consuming it fuels me.</p>
        </div>
        <section className="experiences">
          <div className="experience developer">
            <img src="../images/icons/004-user.png" alt="user diagram" />
            <h2>Developer</h2>
            <p>Background in programming; Working with developers, as a designer with programming literacy makes process seamless.</p>
          </div>
          <div className="experience designer">
            <img src="../images/icons/003-gear.png" alt="gear in circle" />
            <h2>Designer</h2>
            <p>Design as a whole is a shapeshifter. It is not a subject matter on its own. As a Designer, I craft solutions through aesthetics, social science, and iterations</p>
          </div>
          <div className="experience strategist">
            <img src="../images/icons/002-chess.png" alt="chess horse" />
            <h2>Strategist</h2>
            <p>Exploring one subject can lead to a discovery in another. I connect multiple subjects in search of the human centric nugget of truth.</p>
          </div>
        </section>
      </div>
    )
  }
}

export default About;
