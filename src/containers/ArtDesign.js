import React, { Component } from 'react';
import Illustrations from '../components/Illustrations'
import Branding from '../components/Branding'
import Bookmaking from '../components/Bookmaking'

class ArtDesign extends Component {
  render(){
    return (
      <div className="container">
        <div className="page">
          <h1>Art + Design</h1>
          <div className="blurb">
            <p>When it comes to my style, I'm inspired by children's book illustrations, emphera, animation, and nature. Here are a few of my artworks. You can purchase this and other artworks and photography through my <a href="https://society6.com/tofukidSociety6">Society6</a>.</p>
          </div>
          <div className="page-work">
            <div className="page-work-header">
              <h2>Illustrations</h2>              
            </div>
            <Illustrations/>
            <div className="page-work-header">
              <h2>Logos</h2>
            </div>
            <Branding/>
            <div className="page-work-header">
              <h2>Book Arts</h2>
            </div>
            <Bookmaking/>
          </div>
        </div>
      </div>
    )
  }
}

export default ArtDesign;

//if user clicks on illustrations show Illustrations component; otherwise don't show anything
