import React, { Component } from 'react';
import WebDevelopment from '../components/WebDevelopment'
import Illustrations from '../components/Illustrations'
import Branding from '../components/Branding'
import Bookmaking from '../components/Bookmaking'

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWebDev: false,
      isDesign: false,
      isIllust: false,
      isBooks: false,
      isStrategy: false,
    }
  }

  toggleWebDev = () => {
    this.setState({
      isWebDev: !this.state.isWebDev
    })
    console.log('The link was clicked.');
  }

  toggleDesign = () => {
    this.setState({
      isDesign: !this.state.isDesign
    })
    console.log('The link was clicked.');
  }

  toggleIllust = () => {
    this.setState({
      isIllust: !this.state.isIllust
    })
    console.log('The link was clicked.');
  }

  toggleBooks = () => {
    this.setState({
      isBooks: !this.state.isBooks
    })
    console.log('The link was clicked.');
  }

  toggleStrategy = () => {
    this.setState({
      isStrategy: !this.state.isStrategy
    })
    console.log('The link was clicked.');
  }

  render(){
    return (
      <div className="work">
        <h1 className="page-title">Work</h1>
        <div className="blurb">
          <p>I’m a curious creature. My inventive mind usually generates more possibilities than I can handle. I’m the kind of person who enjoys unraveling a bundle of knots or putting together a 1,000 piece jigsaw puzzle. I tinker away on new ideas  whenever the inkling captures me, which is very often.</p>
        </div>
        <div className="work-navlinks">
          <ul>
            <li onClick={this.toggleWebDev}>Web Development</li>
            <li onClick={this.toggleDesign}>Design</li>
            <li onClick={this.toggleIllust}>Illustrations</li>
            <li onClick={this.toggleBooks}>Book Arts</li>
            <li onClick={this.toggleStrategy}>Strategy</li>
          </ul>
        </div>

        {!this.state.isWebDev && this.state.isDesign && this.state.isIllust && this.state.isBooks && this.state.isStrategy ?
          <WebDevelopment/> : null
        }

        {this.state.isWebDev && !this.state.isDesign && this.state.isIllust && this.state.isBooks && this.state.isStrategy ?
          <Branding/> : null
        }

        {this.state.isWebDev && this.state.isDesign && !this.state.isIllust && this.state.isBooks && this.state.isStrategy ?
          <Illustrations/> : null
        }

        {this.state.isWebDev && this.state.isDesign && this.state.isIllust && !this.state.isBooks && this.state.isStrategy ?
          <Bookmaking/> : null
        }

        {this.state.isWebDev && this.state.isDesign && this.state.isIllust && this.state.isBooks && !this.state.isStrategy ?
          <p>for strategy</p> : null
        }

      </div>
    )
  }
}

export default Work;
