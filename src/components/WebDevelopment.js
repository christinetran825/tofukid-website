import React, { Component } from 'react';
import WebApps from './WebApps'

class WebDevelopment extends Component {
  render(){
    return (
      <div className="container">
        <div className="web-dev">
          <h1>Web Development</h1>
          <p>Crafting products that delight people is fun. When building things, I like to be product minded while keeping the end-user in mind. I see the technical details and end goal because people will use what I build. So, I treat all web development products as if they were interactive illustrative artworks.</p>
        </div>

        <WebApps/>

      </div>
    )
  }
}

export default WebDevelopment;
