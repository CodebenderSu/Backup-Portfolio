import React, { Component } from 'react';
//import * as Flavor from '../flavor.json';
import * as earthR from '../utils/images/earthR.png';
import * as earthL from '../utils/images/earthL.png';

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
          <h1 className="drawer-header">Portfolio</h1>
          <p>Paragraph</p>
          <p>More shit</p>
        </div>
        <img className="drawer-right-margin" src={earthR} alt="earth" />
      </div>
    )
  }
}

export default DrawerPortfolio;
