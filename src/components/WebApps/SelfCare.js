import React, { Component } from 'react';

class SelfCare extends Component {
  render(){
    return (
      <section className="webapps">
        <span><a href="/work">Back to Web Development</a></span>
        <div className="webapp">
          <div className="title">
            <div className="project-name">
              <h3>SelfCare</h3>
            </div>
            <div className="links">
              <a href="https://github.com/christinetran825/SelfCare-C" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-lg fa-2x"></i></a>
              <a href="https://youtu.be/6Py4HcsAqNQ" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube fa-lg fa-2x"></i></a>
            </div>
          </div>
          <div className="details">
            <h4>IDEA</h4>
            <p>There are a variety of habits that can affect mental health. From sleep to making sure medication was taken. Can we determine possible symptoms by tracking daily habits?</p>
            <h4>CURRENT CHALLENGE</h4>
            <p>How can I apply React & Redux to build the User Profile?</p>
            <h4>END GOAL</h4>
            <p>Build a mobile health app for users to track their daily habits for a symptom management system.</p>
            <p className="notes">Note - The daily entry tracking is a work in progress.</p>
          </div>
        </div>
      </section>
    )
  }
}

export default SelfCare;
