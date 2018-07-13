import React, { Component } from 'react';
import * as Flavor from '../flavor.json';
import * as earthR from '../utils/images/earthR.gif';
import * as earthL from '../utils/images/earthL.gif';
import * as port0 from '../utils/images/port0.jpg';
import * as port1 from '../utils/images/port1.jpg';
import * as port3 from '../utils/images/port3.jpg';
import * as port4 from '../utils/images/port4.jpg';

class DrawerPortfolio extends Component {
  render() {
    let open = this.props.status ? 'open-bottom' : '';
    return (
      <div className={ "bottom-drawer " + open }>
        <div className="bottom-drawer-tab" onClick={this.props.handlePortfolioClick}>
          <i className="fas fa-angle-double-down" />
        </div>
        <img className="drawer-left-margin" src={earthL} alt="earth" />
        <div className="bottom-drawer-content">
          <h1 className="drawer-header">{Flavor.Portfolio.Header}</h1>
          <p>{Flavor.Portfolio.Paragraph1}</p>
          <div className="portfolio">
            <a className="port-item" href="https://codebendersu.github.io/tribute-page/">
              <span>{Flavor.Portfolio.Span1}</span>
              <img src={port0} alt="Tribute Page" />
            </a>
            <a className="port-item" href="https://codebendersu.github.io/basic-webpage/">
              <span>{Flavor.Portfolio.Span2}</span>
              <img src={port1} alt="Basic Webpage" />
            </a>
            <a className="port-item" href="https://codebendersu.github.io/movie-website/">
              <span>{Flavor.Portfolio.Span3}</span>
              <img src={port3} alt="Movie Website" />
            </a>
            <a className="port-item" href="https://codebendersu.github.io/matching-game/">
              <span>{Flavor.Portfolio.Span4}</span>
              <img src={port4} alt="Matching Game" />
            </a>
          </div>
        </div>
        <img className="drawer-right-margin" src={earthR} alt="earth" />
      </div>
    )
  }
}

export default DrawerPortfolio;
