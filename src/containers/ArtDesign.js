import React, { Component } from 'react';
import Illustrations from '../components/Illustrations'
import Branding from '../components/Branding'
import Bookmaking from '../components/Bookmaking'

class ArtDesign extends Component {
  render(){
    return (
      <div className="wrapper">
        <div className="art-design">
          <h1>Art + Design</h1>
          <div className="content">
            <p>When it comes to my style, I'm inspired by children's book illustrations, emphera, animation, and nature. Here are a few of my artworks.</p>
          </div>
          <Illustrations/>
          <Branding/>
          <Bookmaking/>
        </div>
      </div>
    )
  }
}



export default ArtDesign;
