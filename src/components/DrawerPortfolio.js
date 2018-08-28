import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem.js';
import { Portfolio, Item } from '../flavor.json';
import * as earthR from '../assets/earthR.gif';
import * as earthL from '../assets/earthL.gif';

class DrawerPortfolio extends Component {
  render() {
    let open = this.props.status ? 'open-bottom' : '';
    const items = Item.map((item) => // Generate portfolio items dynamically
      <PortfolioItem key={item.Alt} src={item.Src} desc={item.Desc}
        img={item.Img} alt={item.Alt} />
    );
    return (
      <div className={ "bottom-drawer " + open }>
        <div className="bottom-drawer-tab" onClick={this.props.handlePortfolioClick}>
          <i className="fas fa-angle-double-down" />
        </div>
        <img className="drawer-left-margin" src={earthL} alt="earth" />
        <div className="bottom-drawer-content">
          <h1 className="drawer-header">{Portfolio.Header}</h1>
          <p>{Portfolio.Paragraph1}</p>
          <div className="portfolio">
            {items}
          </div>
        </div>
        <img className="drawer-right-margin" src={earthR} alt="earth" />
      </div>
    )
  }
}

export default DrawerPortfolio;
