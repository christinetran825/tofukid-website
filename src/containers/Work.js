import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import WebDevelopment from '../components/WebDevelopment'
import Illustrations from '../components/Illustrations'
import Branding from '../components/Branding'
import Bookmaking from '../components/Bookmaking'

class Work extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 1
    };
  }

  handleSelect = (key) => {
    this.setState({
      key
    });
  }

  render() {

    return (
      <div className="work">
        <h1 className="page-title">Work</h1>
        <div className="blurb">
          <p>I’m a curious creature. My inventive mind usually generates more possibilities than I can handle. I’m the kind of person who enjoys unraveling a bundle of knots or putting together a 1,000 piece jigsaw puzzle. I tinker away on new ideas  whenever the inkling captures me, which is very often.</p>
        </div>
        <Tabs
          activeKey={this.state.key}
          onSelect={this.handleSelect}
          id="controlled-tab-example"
        >
          <Tab eventKey={1} title="Web Development">
            <WebDevelopment/>
          </Tab>
          <Tab eventKey={2} title="Design">
            <Branding/>
          </Tab>
          <Tab eventKey={3} title="Illustrations">
            <Illustrations/>
          </Tab>
          <Tab eventKey={4} title="Book Arts">
            <Bookmaking/>
          </Tab>
          <Tab eventKey={5} title="Strategy">
            <h2 className="coming-soon">Coming Soon</h2>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default Work;
