import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem.js';
import { portfolio, item } from '../../data.json';
import earthR from '../../assets/earthR.gif';
import earthL from '../../assets/earthL.gif';

class Portfolio extends Component {
  render() {
    let open = this.props.status ? 'open-bottom' : '';
    const items = item.map((i) => // Generate portfolio items dynamically
      <PortfolioItem key={i.alt} src={i.src} desc={i.desc}
        img={i.img} alt={i.alt} />
    );
    return (
      <div className={ "bottom-drawer " + open }>
        <div className="bottom-drawer-tab" onClick={this.props.handlePortfolioClick}>
          <i className="fas fa-angle-double-down" />
        </div>
        <img className="drawer-left-margin" src={earthL} alt="earth" />
        <div className="bottom-drawer-content">
          <h1 className="drawer-header">{portfolio.header}</h1>
          <p>{portfolio.paragraph1}</p>
          <div className="portfolio">
            {items}
          </div>
        </div>
        <img className="drawer-right-margin" src={earthR} alt="earth" />
      </div>
    )
  }
}

export default Portfolio;
