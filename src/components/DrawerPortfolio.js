import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem.js';
import { Portfolio, Item } from '../flavor.json';
import * as earthR from '../assets/earthR.gif';
import * as earthL from '../assets/earthL.gif';

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
          <h1 className="drawer-header">{Portfolio.Header}</h1>
          <p>{Portfolio.Paragraph1}</p>
          <div className="portfolio">
            <PortfolioItem ref={Item[0].Ref} desc={Item[0].Desc}
              img={Item[0].Img} alt={Item[0].Alt} />
            <PortfolioItem ref={Item[1].Ref} desc={Item[1].Desc}
              img={Item[1].Img} alt={Item[1].Alt} />
            <PortfolioItem ref={Item[2].Ref} desc={Item[2].Desc}
              img={Item[2].Img} alt={Item[2].Alt} />
            <PortfolioItem ref={Item[3].Ref} desc={Item[3].Desc}
              img={Item[3].Img} alt={Item[3].Alt} />
          </div>
        </div>
        <img className="drawer-right-margin" src={earthR} alt="earth" />
      </div>
    )
  }
}

export default DrawerPortfolio;
